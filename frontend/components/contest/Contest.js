import { useRouter } from "next/router";
import React from "react";
import Intro from "./intro/Intro";
import Question from "./question/Question";
import Thanks from "./thanks/Thanks";
import Wrong from "./wrong/Wrong";

const Contest = ({ contest }) => {
  const router = useRouter();
  const handleDisplay = q => {
    if (q === 0)
      return (
        <Intro
          title={contest.title}
          onStart={() => router.push(`/contest/${contest.id}/1`)}
        />
      );
    else if (q === contest.question.length + 1) return <Thanks />;
    else if (q > contest.question.length + 1) return <Wrong />;
    else return <Question question={contest.question[q - 1]} />;
  };

  return handleDisplay(parseInt(router.query.q));
};

export default Contest;

import React, { useEffect, useState } from "react";
import Answer from "./answer/Answer";
import Navigate from "./navigate/Navigate";
import styles from "./styles.module.scss";

const Question = ({ question }) => {
  const [chosenAnswer, setChosenAnswer] = useState(null);
  useEffect(() => {
    return () => {
      setChosenAnswer(null);
    };
  }, [question]);

  const sound = isRight => {
    const right = new Audio("/assets/sounds/right.mp3");
    const wrong = new Audio("/assets/sounds/wrong.mp3");
    if (isRight) right.play();
    else wrong.play();
  };

  useEffect(() => {
    if (chosenAnswer)
      setTimeout(
        () => sound(chosenAnswer === question.answer.find(a => a.isRight).id),
        2500
      );
  }, [chosenAnswer]);
  return (
    <div className={`container ${styles.wrapper}`}>
      <h1 className={styles.title}>{question.statement}</h1>
      {question.answer.map(answer => (
        <Answer
          key={answer.text}
          text={answer.text}
          isRight={answer.isRight}
          onClick={() => setChosenAnswer(answer.id)}
          isChosen={chosenAnswer === answer.id}
        />
      ))}
      <Navigate
        nextActive={chosenAnswer === question.answer.find(a => a.isRight).id}
      />
    </div>
  );
};

export default Question;

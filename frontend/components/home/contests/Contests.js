import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Button from "../../shared/button/Button";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getContests } from "../../../store/contest/contest";
import Link from "next/link";

const Contests = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const contests = useSelector(state => state.contests.contests);
  useEffect(() => {
    dispatch(getContests());
  }, []);
  return (
    <section className={styles.contests}>
      <div className="container">
        <Button
          text="Add Contest"
          onClick={() => router.push("create-contest")}
        />
        <h1 className={styles.title}>My contests</h1>
        {contests.map(contest => (
          <div key={contest.id}>
            <Link href={`/contest/${contest.id}`}>
              <a>{contest.attributes.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contests;

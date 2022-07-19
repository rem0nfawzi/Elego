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
        <h1 className={styles.title}>My contests</h1>
        <Button
          text="Add Contest"
          onClick={() => router.push("create-contest")}
        />
        <div className={styles.items}>
          {contests.map(contest => (
            <div key={contest.id} className={styles.contest}>
              <Link href={`/contest/${contest.id}/0`}>
                <a className={styles.link}>{contest.attributes.title}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contests;

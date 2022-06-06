import React from "react";
import styles from "./styles.module.scss";
import Button from "../../shared/button/Button";
import { useRouter } from "next/router";

const Contests = () => {
  const router = useRouter();
  return (
    <section className={styles.contests}>
      <div className="container">
        <Button
          text="Add Contest"
          onClick={() => router.push("create-contest")}
        />
        <h1 className={styles.title}>My contests</h1>
      </div>
    </section>
  );
};

export default Contests;

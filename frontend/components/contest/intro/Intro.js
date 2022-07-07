import React from "react";
import styles from "./styles.module.scss";
import Button from "../../shared/button/Button";

const Intro = ({ title, onStart }) => {
  return (
    <div className={styles.intro}>
      <h2 className={styles.title}>{title}</h2>
      <Button text="Start" onClick={onStart} />
    </div>
  );
};

export default Intro;

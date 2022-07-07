import React from "react";
import styles from "./styles.module.scss";

const Answer = ({ text, isRight, onClick, isChosen }) => {
  return (
    <button
      className={`${styles.answer} ${
        isChosen ? (isRight ? styles.right : styles.wrong) : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Answer;

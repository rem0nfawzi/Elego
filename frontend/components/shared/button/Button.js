import React from "react";
import styles from "./styles.module.scss";

const Button = ({ text, onClick = () => {} }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

import React from "react";
import styles from "./styles.module.scss";

const Form = ({ children }) => {
  return (
    <div className={`container ${styles.wrapper}`}>
      <form className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        {children}
      </form>
    </div>
  );
};

export default Form;

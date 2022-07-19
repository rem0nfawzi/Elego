import React from "react";
import styles from "./styles.module.scss";

const Form = ({ title, onSubmit, children }) => {
  return (
    <div className={`container ${styles.wrapper}`}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </form>
    </div>
  );
};

export default Form;

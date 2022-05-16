import React from "react";
import styles from "./styles.module.scss";

const Input = ({ type, placeholder, value, setValue }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={e => {
        setValue(e.target.value);
      }}
      className={styles.input}
    />
  );
};

export default Input;

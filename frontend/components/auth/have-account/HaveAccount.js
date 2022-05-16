import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const HaveAccount = ({ text, linkText, url }) => {
  return (
    <span className={styles.wrapper}>
      {text}{" "}
      <Link href={url}>
        <a>{linkText}</a>
      </Link>
    </span>
  );
};

export default HaveAccount;

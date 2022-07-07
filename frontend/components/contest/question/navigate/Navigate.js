import React from "react";
import styles from "./styles.module.scss";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";
const Navigate = ({ nextActive }) => {
  const router = useRouter();
  return (
    <div className={styles.nav}>
      <button
        className={`${styles.btn} ${styles.next} ${
          !nextActive ? styles.disabled : ""
        }`}
        onClick={() => {
          router.push(
            `/contest/${router.query.id}/${parseInt(router.query.q) + 1}`
          );
        }}
        disabled={!nextActive}
      >
        <BiArrowBack size={24} color="#fff" />
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          router.push(
            `/contest/${router.query.id}/${parseInt(router.query.q) - 1}`
          );
        }}
      >
        <BiArrowBack size={24} color="#fff" />
      </button>
    </div>
  );
};

export default Navigate;

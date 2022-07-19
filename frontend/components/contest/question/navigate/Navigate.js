import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";
const Navigate = ({ nextActive }) => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (nextActive) setTimeout(() => setActive(nextActive), 4000);
    else setTimeout(() => setActive(false), 4000);
    return () => setActive(false);
  }, [nextActive]);
  return (
    <div className={styles.nav}>
      <button
        className={`${styles.btn} ${styles.next} ${
          !active ? styles.disabled : ""
        }`}
        onClick={() => {
          router.push(
            `/contest/${router.query.id}/${parseInt(router.query.q) + 1}`
          );
        }}
        disabled={!active}
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

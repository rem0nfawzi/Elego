import React, { useEffect, useState } from "react";
import Input from "../shared/form/input/Input";
import Button from "../shared/button/Button";
import styles from "./styles.module.scss";
import AddQuestion from "./add-question/AddQuestion";

const CreateContest = () => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    console.log(questions);
  }, [questions]);
  return (
    <div className="container">
      {showModal && (
        <AddQuestion setShowModal={setShowModal} setQuestions={setQuestions} />
      )}
      <section className={styles.create}>
        <form className={styles.form}>
          <h2 className={styles.title}>Create Contest</h2>
          <div className={styles.input_wrap}>
            <Input
              type="text"
              value={title}
              setValue={setTitle}
              placeholder="Contest Title*"
            />
          </div>
          <div className={styles.btn_wrap}>
            <button type="button" onClick={() => setShowModal(true)}>
              Add Question
            </button>
          </div>
          <Button text="Create Contest" />
        </form>
      </section>
    </div>
  );
};

export default CreateContest;

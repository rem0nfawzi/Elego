import React, { useState } from "react";
import Button from "../../shared/button/Button";
import Input from "../../shared/form/input/Input";
import styles from "./styles.module.scss";

const AddQuestion = ({ setShowModal, setQuestions }) => {
  const [statement, setStatement] = useState("");
  const [answers, setAnswers] = useState([
    { key: 1, text: "", isRight: false },
    { key: 2, text: "", isRight: false },
    { key: 3, text: "", isRight: false },
    { key: 4, text: "", isRight: false },
  ]);
  const handleSubmit = e => {
    e.preventDefault();
    setQuestions(prev => [...prev, { statement, answer: answers }]);
    setShowModal(false);
  };
  return (
    <div className={styles.add}>
      <div className={styles.overlay} onClick={() => setShowModal(false)} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Add question</h2>
        <div className={styles.input_wrap}>
          <Input
            type="text"
            value={statement}
            setValue={setStatement}
            placeholder="Statement"
          />
        </div>
        {answers.map(answer => (
          <div className={styles.answer_wrap} key={answer.key}>
            <Input
              type="text"
              value={answer.text}
              setValue={value => {
                setAnswers(prev =>
                  prev.map(el =>
                    el.key === answer.key ? { ...el, text: value } : el
                  )
                );
              }}
              placeholder="Statement"
            />
            <input
              type="radio"
              name="answer"
              onClick={() => {
                setAnswers(prev =>
                  prev.map(el => ({ ...el, isRight: el.key === answer.key }))
                );
              }}
            />
          </div>
        ))}
        <Button text="Add Question" />
      </form>
    </div>
  );
};

export default AddQuestion;

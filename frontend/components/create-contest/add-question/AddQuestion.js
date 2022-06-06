import React, { useState } from "react";
import Button from "../../shared/button/Button";
import Input from "../../shared/form/input/Input";
import styles from "./styles.module.scss";

const AddQuestion = ({ setShowModal, setQuestions }) => {
  const [text, setText] = useState("");
  const [answers, setAnswers] = useState([
    { id: 1, text: "", right: false },
    { id: 2, text: "", right: false },
    { id: 3, text: "", right: false },
    { id: 4, text: "", right: false },
  ]);
  const handleSubmit = e => {
    e.preventDefault();
    setQuestions(prev => [...prev, { text, answers }]);
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
            value={text}
            setValue={setText}
            placeholder="Statement"
          />
        </div>
        {answers.map(answer => (
          <div className={styles.answer_wrap} key={answer.id}>
            <Input
              type="text"
              value={answer.text}
              setValue={value => {
                setAnswers(prev =>
                  prev.map(el =>
                    el.id === answer.id ? { ...el, text: value } : el
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
                  prev.map(el => ({ ...el, right: el.id === answer.id }))
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

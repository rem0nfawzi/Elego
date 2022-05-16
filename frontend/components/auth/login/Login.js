import React, { useState } from "react";
import Button from "../../shared/button/Button";
import Input from "../../shared/form/input/Input";
import Form from "../form/Form";
import styles from "./styles.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form>
      <div className={styles.input_wrap}>
        <Input
          type="text"
          value={email}
          setValue={setEmail}
          placeholder="Email"
        />
      </div>
      <div className={styles.input_wrap}>
        <Input
          type="password"
          value={password}
          setValue={setPassword}
          placeholder="password"
        />
      </div>
      <Button text="Login" />
    </Form>
  );
};

export default Login;

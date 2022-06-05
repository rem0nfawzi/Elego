import React, { useState } from "react";
import { login } from "../../../store/auth/reducer";
import Button from "../../shared/button/Button";
import Input from "../../shared/form/input/Input";
import Form from "../form/Form";
import HaveAccount from "../have-account/HaveAccount";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    // const emailValidation = validate(email, ["NOT_EMPTY"]);
  };
  return (
    <Form title="Login" onSubmit={handleSubmit}>
      <div>
        <Input
          type="text"
          value={email}
          setValue={setEmail}
          placeholder="Email"
        />
      </div>
      <div>
        <Input
          type="password"
          value={password}
          setValue={setPassword}
          placeholder="password"
        />
      </div>
      <Button text="Login" />
      <HaveAccount
        text="Don't have an account?"
        linkText="Register"
        url="/register"
      />
    </Form>
  );
};

export default Login;

import React, { useState } from "react";
import Button from "../../shared/button/Button";
import Input from "../../shared/form/input/Input";
import Form from "../form/Form";
import HaveAccount from "../have-account/HaveAccount";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form title="Login">
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
        text="Doesn't have an account?"
        linkText="Register"
        url="/register"
      />
    </Form>
  );
};

export default Login;

import React, { useState } from "react";
import Button from "../../shared/button/Button";
import Input from "../../shared/form/input/Input";
import Form from "../form/Form";
import HaveAccount from "../have-account/HaveAccount";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <Form title="Register" onSubmit={handleSubmit}>
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
      <Button text="Register" />
      <HaveAccount
        text="Already have an account?"
        linkText="Login"
        url="/login"
      />
    </Form>
  );
};

export default Register;

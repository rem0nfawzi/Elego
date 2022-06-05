import React, { useState } from "react";
import Button from "../../shared/button/Button";
import Input from "../../shared/form/input/Input";
import Form from "../form/Form";
import HaveAccount from "../have-account/HaveAccount";
import validate from "../../../utils/validate";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../store/auth/reducer";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser({ email, password }));
    // const emailValidation = validate(email, ["NOT_EMPTY"]);
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

import React from "react";
import RegisterForm from "../components/auth/register/Register";
import authinticate from "../utils/authinticate";

const register = () => {
  return <RegisterForm />;
};

export async function getServerSideProps(context) {
  const token = context.req.cookies.auth;
  if (token) {
    const user = await authinticate(token);
    if (user)
      return {
        redirect: { destination: "/", permanent: false },
      };
  }
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default register;

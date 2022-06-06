import React, { useEffect } from "react";
import { setUser } from "../store/auth/reducer";
import { useDispatch } from "react-redux";
import authinticate from "../utils/authinticate";
import CreateContest from "../components/create-contest/CreateContest";

const Create = ({ user }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) dispatch(setUser(user));
  }, [user]);
  return <CreateContest />;
};

export async function getServerSideProps(context) {
  const token = context.req.cookies.auth;
  if (token) {
    const user = await authinticate(token);
    if (!user)
      return {
        redirect: { destination: "/login", permanent: false },
      };
    else
      return {
        props: {
          user,
        },
      };
  }
  return {
    redirect: { destination: "/login", permanent: false },
  };
}
export default Create;

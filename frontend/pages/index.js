import React, { useEffect } from "react";
import Contests from "../components/home/contests/Contests";
import { setUser } from "../store/auth/reducer";
import { useDispatch } from "react-redux";
import authinticate from "../utils/authinticate";
import { getContests } from "../store/contest/contest";

const Index = ({ user }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContests());
    if (user) dispatch(setUser(user));
  }, [user]);
  return <Contests />;
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
export default Index;

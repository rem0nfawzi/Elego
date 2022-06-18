import React, { useEffect } from "react";
import api from "../../utils/api";
import { setUser } from "../../store/auth/reducer";
import { useDispatch } from "react-redux";
import authinticate from "../../utils/authinticate";
import axios from "axios";

const Contest = ({ user, contest }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("C", contest);
    if (user) dispatch(setUser(user));
  }, [user]);
  return <div></div>;
};

export async function getServerSideProps(context) {
  const token = context.req.cookies.auth;
  const id = context.query.id;
  if (token) {
    const user = await authinticate(token);
    if (!user)
      return {
        redirect: { destination: "/login", permanent: false },
      };
    else {
      const contest = await axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/contests/${id}`,
      });
      console.log("CON:", contest.data);
      return {
        props: {
          user,
          contest: contest.data,
        },
      };
    }
  }
  return {
    redirect: { destination: "/login", permanent: false },
  };
}

export default Contest;

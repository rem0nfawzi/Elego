import axios from "axios";
import Cookies from "js-cookie";

export default async ({
  method = "POST",
  endpoint,
  payload,
  isAuth = false,
}) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (isAuth) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get(
      "auth"
    )}`;
  } else delete axios.defaults.headers.common["Authorization"];
  try {
    const res = await axios({
      method,
      url: `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
      data: payload,
      config,
    });
    if (res.status === 200) return res.data;
  } catch (error) {
    return error.response.data.error;
  }
};

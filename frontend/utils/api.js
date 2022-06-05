import axios from "axios";

export default async ({ endpoint, payload }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  delete axios.defaults.headers.common["Authorization"];
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
      payload,
      config
    );
    if (res.status === 200) return res.data;
  } catch (error) {
    return error.response.data.error;
  }
};

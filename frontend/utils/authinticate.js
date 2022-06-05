import axios from "axios";
export default async token => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/me`
    );
    if (res.status === 200) return res.data;
  } catch (error) {
    return null;
  }
};

import { AxiosInstance } from "axios";
const userExists = async (token, username, email) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const res = await AxiosInstance.get(
    `/users?filters[$and][0][username][$eq]=${username}`,
    options
  );
  const data = res.data;

  return data;
};

export default userExists;

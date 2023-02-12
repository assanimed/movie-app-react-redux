import { AxiosInstance } from "../AxiosInstance";

const getUsers = async (token) => {
  const res = await AxiosInstance.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export default getUsers;

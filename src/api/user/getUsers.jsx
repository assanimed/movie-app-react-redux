import { AxiosInstance } from "../AxiosInstance";

const getUsers = async (token) => {
  const { data } = await AxiosInstance.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export default getUsers;

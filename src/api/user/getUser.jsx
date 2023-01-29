import { AxiosInstance } from "../AxiosInstance";
export const getUser = async (token, id) => {
  const { data } = await AxiosInstance.get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

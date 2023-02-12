import { AxiosInstance } from "../AxiosInstance";
import getTokenCookie from "../../utils/helpers/getTokenCookie";
export const getUser = async (id) => {
  const { data } = await AxiosInstance.get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${getTokenCookie()}`,
    },
  });
  return data;
};

import getTokenCookie from "../../utils/helpers/getTokenCookie";
import { AxiosInstance } from "../AxiosInstance";

const getUsers = async () => {
  const res = await AxiosInstance.get("/users", {
    headers: {
      Authorization: `Bearer ${getTokenCookie()}`,
    },
  });
  return res;
};

export default getUsers;

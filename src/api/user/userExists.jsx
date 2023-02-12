import { AxiosInstance } from "axios";
import getTokenCookie from "../../utils/helpers/getTokenCookie";
const userExists = async (username, email) => {
  const options = {
    headers: {
      Authorization: `Bearer ${getTokenCookie}`,
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

import getTokenCookie from "../../utils/helpers/getTokenCookie";
import { AxiosInstance } from "../AxiosInstance";
const deleteUser = async (id) => {
  try {
    const { data, ...response } = await AxiosInstance.delete(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${getTokenCookie()}`,
      },
    });

    if (response.status !== 200) throw new Error("an Error has Accurred");

    return data;
  } catch (e) {
    // JUST FOR NOW
  }
};

export default deleteUser;

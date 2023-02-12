import getTokenCookie from "../../utils/helpers/getTokenCookie";
import { AxiosInstance } from "../AxiosInstance";
const deleteMovie = async (id) => {
  try {
    const { data, ...response } = await AxiosInstance.delete(`/movies/${id}`, {
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

export default deleteMovie;

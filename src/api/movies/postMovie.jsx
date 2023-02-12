import getTokenCookie from "../../utils/helpers/getTokenCookie";
import { AxiosInstance } from "../AxiosInstance";

const postMovie = async (formData) => {
  const options = {
    headers: {
      Authorization: `Bearer ${getTokenCookie()}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const res = await AxiosInstance.post("/movies", formData, options);
    if (res.status !== 200) throw new Error("Error Accurred");
  } catch (e) {
    return { error: e.message };
  }
};

export default postMovie;

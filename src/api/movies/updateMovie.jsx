import getTokenCookie from "../../utils/helpers/getTokenCookie";
import { AxiosInstance } from "../AxiosInstance";
const updateMovie = async (id, formData) => {
  const options = {
    headers: {
      Authorization: `Bearer ${getTokenCookie()}`,
      "Content-Type": "multipart/form-data",
    },
  };

  AxiosInstance.put(`/movies/${id}`, formData, options);
};

export default updateMovie;

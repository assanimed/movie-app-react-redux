import { AxiosInstance } from "../AxiosInstance";
const updateMovie = async (token, id, formData) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  AxiosInstance.put(`/movies/${id}`, formData, options);
};

export default updateMovie;

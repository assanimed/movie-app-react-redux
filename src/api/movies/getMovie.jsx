import { AxiosInstance } from "../AxiosInstance";
export const getMovie = async (id) => {
  const { data } = await AxiosInstance.get(`/movies/${id}?populate=*`);
  return data;
};

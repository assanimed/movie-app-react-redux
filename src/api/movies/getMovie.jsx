import { AxiosInstance } from "../AxiosInstance";

export const getMovie = async (id) => {
  try {
    const { data } = await AxiosInstance.get(`/movies/${id}?populate=*`);
    return data;
  } catch {
    throw new Response("Title Not Found", { status: 404 });
  }
};

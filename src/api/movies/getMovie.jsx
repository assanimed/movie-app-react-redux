import { AxiosInstance } from "../AxiosInstance";

const sleep = (duration) =>
  new Promise((res) => setTimeout(res, duration * 1000));

export const getMovie = async (id) => {
  try {
    const { data } = await AxiosInstance.get(`/movies/${id}?populate=*`);
    await sleep(5);
    return data;
  } catch {
    throw new Response("Title Not Found", { status: 404 });
  }
};

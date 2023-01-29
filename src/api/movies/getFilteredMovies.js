import { AxiosInstance } from "../AxiosInstance";

const getFilteredMovies = async (query, page, pageLimit) => {
  const res = await AxiosInstance.get(
    `/movies?${query}&populate=*&pagination[page]=${page}&&pagination[pageSize]=${pageLimit}&sort=createdAt:desc`,
    {
      query,
    }
  );
  return res.data;
};

export default getFilteredMovies;

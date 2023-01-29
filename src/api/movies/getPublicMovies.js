import { AxiosInstance } from "../AxiosInstance";

const getPublicMovies = async (page, pageLimit) => {
  const res = await AxiosInstance.get(
    `/movies?pagination[page]=${page}&&pagination[pageSize]=${pageLimit}&populate=*&sort=createdAt:desc`
  );
  return res.data;
};

export default getPublicMovies;

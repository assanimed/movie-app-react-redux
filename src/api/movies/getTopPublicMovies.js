import { AxiosInstance } from "../AxiosInstance";

const getTopPublicMovies = async (entry) => {
  const res = await AxiosInstance.get(
    `/movies?sort=${entry}:desc&pagination[pageSize]=20&populate=*`
  );
  return res.data;
};

export default getTopPublicMovies;

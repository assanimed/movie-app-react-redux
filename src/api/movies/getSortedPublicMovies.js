import { AxiosInstance } from "../AxiosInstance";

const getSortedPublicMovies = async (entry, order) => {
  const nOrder = order ? order : "desc";
  const res = await AxiosInstance.get(
    `/movies?sort=${entry}:${nOrder}&pagination[pageSize]=20&populate=*`
  );
  return res.data;
};

export default getSortedPublicMovies;

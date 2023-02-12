import { AxiosInstance } from "../AxiosInstance";
import getTokenCookie from "../../utils/helpers/getTokenCookie";

const getMovies = async (page, pageLimit) => {
  const options = {
    headers: {
      Authorization: `Bearer ${getTokenCookie()}`,
    },
  };
  const res = await AxiosInstance.get(
    `/movies?pagination[page]=${page}&&pagination[pageSize]=${pageLimit}`,
    options
  );

  let { data, meta } = { ...res };
  if (!meta) {
    data = data?.data;
    meta = data?.meta;
  }
  return { data, meta };
};

export default getMovies;

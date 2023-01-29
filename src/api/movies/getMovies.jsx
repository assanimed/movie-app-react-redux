import { AxiosInstance } from "../AxiosInstance";

const getMovies = async (token, page, pageLimit) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data: res } = await AxiosInstance.get(
    `/movies?pagination[page]=${page}&&pagination[pageSize]=${pageLimit}`,
    options
  );
  const { data, meta } = res;
  return { data, meta };
};

export default getMovies;

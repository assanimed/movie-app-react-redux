import { AxiosInstance } from "../AxiosInstance";

const getMovies = async (token, page, pageLimit) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
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

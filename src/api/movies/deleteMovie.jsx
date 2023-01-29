import { AxiosInstance } from "../AxiosInstance";
const deleteMovie = async (id, token) => {
  try {
    const { data, ...response } = await AxiosInstance.delete(`/movies/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) throw new Error("an Error has Accurred");

    return data;
  } catch (e) {
    // JUST FOR NOW
  }
};

export default deleteMovie;

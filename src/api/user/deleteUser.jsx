import { AxiosInstance } from "../AxiosInstance";
const deleteUser = async (id, token) => {
  try {
    const { data, ...response } = await AxiosInstance.delete(`/users/${id}`, {
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

export default deleteUser;

import { AxiosInstance } from "../AxiosInstance";

const addUser = async ({ username, email, password }, token) => {
  try {
    const res = await AxiosInstance.post(
      "/auth/local/register",
      { username, email, password },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (e) {
    if (e?.response?.status)
      return { error: true, message: "Email or Username are already taken" };
    else return { error: true, message: "Internal Server Error" };
  }
};

export default addUser;

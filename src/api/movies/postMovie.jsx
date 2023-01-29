import { AxiosInstance } from "../AxiosInstance";

const postMovie = async (token, formData) => {
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const res = await AxiosInstance.post("/movies", formData, options);
    if (res.status !== 200) throw new Error("Error Accurred");
  } catch (e) {
    return { error: e.message };
  }
};

export default postMovie;

import axios from "axios";
import { BASEURL } from "./BASEURL";

export const AxiosInstance = axios.create({
  baseURL: `${BASEURL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

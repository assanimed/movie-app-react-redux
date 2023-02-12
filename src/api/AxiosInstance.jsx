import axios from "axios";
import { BASEURL } from "./BASEURL";

import { setUser, unsetUser } from "../store/AuthSlice";

import store from "../store";

import getTokenCookie from "../utils/helpers/getTokenCookie";

export const AxiosInstance = axios.create({
  baseURL: `${BASEURL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

const refreshAccessToken = async () => {
  try {
    const res = await fetch(`${BASEURL}/api/token/refresh`, {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();

    return data;
  } catch (e) {
    return e;
  }
};

AxiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const Token = getTokenCookie();

    if (error?.response?.status === 401 && Token) {
      const originalRequestConfig = error.config;
      const refreshData = await refreshAccessToken();
      if (refreshData?.jwt) {
        const currentUser = store.getState().Auth.user;
        const token = refreshData.jwt;
        document.cookie = `ma_at=${token}`;
        document.cookie = `last_login=${new Date()}`;
        store.dispatch(setUser({ user: currentUser, token }));
        originalRequestConfig.headers["Authorization"] = `Bearer ${token}`;
        const ress = await AxiosInstance.request(originalRequestConfig);
        return Promise.resolve(ress.data);
      } else {
        store.dispatch(unsetUser());
      }
    } else {
      store.dispatch(unsetUser());
    }
    return Promise.reject(error);
  }
);

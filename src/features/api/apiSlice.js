import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASEURL } from "../../api/BASEURL";
import getTokenCookie from "../../utils/helpers/getTokenCookie";
import { unsetUser } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: BASEURL,
  credentials: "include",
  prepareHeaders: (headers, { endpoint }) => {
    const token = getTokenCookie();
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const refreshBaseQuery = fetchBaseQuery({
  method: "POST",
  baseUrl: BASEURL,
  credentials: "include",
});

const reauthBaseQuery = async (args, api, extraOptions) => {
  console.log("ARGS ->", { args, api, extraOptions });
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    console.log("SENDING REFRSH TOKEN");
    const refreshResult = await refreshBaseQuery(
      "/api/token/refresh",
      api,
      extraOptions
    );
    if (refreshResult?.data) {
      const token = refreshResult?.data?.jwt;
      document.cookie = `ma_at=${token};SameSite=Lax`;
      document.cookie = `last_in=${new Date()};SameSite=Lax`;
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(unsetUser());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: reauthBaseQuery,
  endpoints: (builder) => ({}),
});

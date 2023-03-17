import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASEURL } from "../../utils/BASEURL";
import getTokenCookie from "../../utils/helpers/getTokenCookie";
import { unsetUser } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: BASEURL,
  prepareHeaders: (headers) => {
    const token = getTokenCookie();
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const refreshBaseQuery = fetchBaseQuery({
  baseUrl: BASEURL,
  credentials: "include",
});

const reauthBaseQuery = async (args, api, extraOptions) => {
  console.log("ARGS ---> ", args, api, extraOptions);
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    console.log("INVOKE REFRESH TOKEN");
    const refreshResult = await refreshBaseQuery(
      "/api/token/refresh",
      api,
      extraOptions
    );

    console.log("Refresh RESULT ->", refreshResult);
    if (refreshResult?.data) {
      const token = refreshResult?.data?.jwt;
      document.cookie = `ma_at=${token};SameSite=Lax;Path=/`;
      document.cookie = `last_in=${new Date()};SameSite=Lax;Path=/`;
      result = await baseQuery(args, api, extraOptions);
    } else {
      document.cookie = "ma_at= ;max-age=0";
      document.cookie = `last_in= ;max-age=0`;
      api.dispatch(unsetUser());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: reauthBaseQuery,
  tagTypes: ["movies", "users"],
  endpoints: (builder) => ({}),
});

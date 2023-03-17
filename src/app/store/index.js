import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "../api/apiSlice";

import auth from "../../features/auth/authSlice";
import movies from "../../features/movie/movieSlice";
import filter from "../../features/filter/filterSlice";
import modal from "../../features/modal/modalSlice";
import Users from "../../features/user/UsersSlice";
import PublicMovies from "../../features/movie/PublicMoviesSlice";
import Search from "../../features/search/SearchSlice";
import Theme from "../../features/theme/ThemeSlice";
import RoutesControl from "../../features/routeControl/RoutesControlSlice";

const store = configureStore({
  reducer: {
    auth,
    movies,
    filter,
    modal,
    Users,
    PublicMovies,
    Search,
    Theme,
    RoutesControl,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;

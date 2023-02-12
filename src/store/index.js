import { configureStore } from "@reduxjs/toolkit";
import Auth from "./AuthSlice";
import Modal from "./ModalSlice";
import Movies from "./MovieSlice";
import Users from "./UsersSlice";
import PublicMovies from "./PublicMovies";
import Filter from "./FilterSlice";
import Search from "./SearchSlice";
import Title from "./TitleSlice";
import Theme from "./ThemeSlice";
import RoutesControl from "./RoutesControlSlice";

const store = configureStore({
  reducer: {
    Auth,
    Modal,
    Movies,
    Users,
    PublicMovies,
    Filter,
    Search,
    Title,
    Theme,
    RoutesControl,
  },
});

export default store;

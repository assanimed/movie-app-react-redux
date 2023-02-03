import { createSlice } from "@reduxjs/toolkit";

const PublicMovies = createSlice({
  name: "PublicMovies",
  initialState: {
    movies: [],
    pageLimit: 10, // 20
    currentPage: 1,
    totalPages: 1,
    filterMode: false,
  },
  reducers: {
    setPublicMovies: (state, action) => {
      const { payload: movies } = action;
      state.movies = movies;
    },
    setPublicMetaData: (state, action) => {
      const { page, pageCount } = action.payload;

      state.currentPage = page;
      state.totalPages = pageCount;
    },
    setCurrentPublicPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilterMode: (state, action) => {
      state.filterMode = action.payload;
    },
  },
});

export default PublicMovies.reducer;

export const {
  setPublicMovies,
  setPublicMetaData,
  setCurrentPublicPage,
  setFilterMode,
} = PublicMovies.actions;

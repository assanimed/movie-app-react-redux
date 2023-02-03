import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "Movies",
  initialState: {
    movies: [],
    pageLimit: 10,
    currentPage: 1,
    totalPages: 1,
  },
  reducers: {
    setMovies: (state, action) => {
      const { payload: movies } = action;
      state.movies = movies;
    },
    setMetaData: {
      reducer: (state, action) => {
        const { page, pageCount } = action.payload;
        state.currentPage = page;
        state.totalPages = pageCount;
      },
      prepare: (meta) => {
        const currPage =
          meta.page > meta.pageCount ? meta.pageCount : meta.page;
        return { payload: { ...meta, page: currPage } };
      },
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export default MovieSlice.reducer;

export const { setMovies, setMetaData, setCurrentPage } = MovieSlice.actions;

import { apiSlice } from "../api/apiSlice";

export const movieApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovie: builder.query({
      query: (id) => `/api/movies/${id}?populate=*`,
    }),
    getMovies: builder.query({
      query: (params) =>
        `/api/movies?pagination[page]=${params.currentPage}&&pagination[pageSize]=${params.pageLimit}`,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetMovieQuery, useGetMoviesQuery } = movieApiSlice;

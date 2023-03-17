import { apiSlice } from "../../app/api/apiSlice";

export const publicMovieApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPublicMovies: builder.query({
      query: ({ currentPage, pageLimit, filter }) =>
        `/api/movies?${
          filter !== "" ? `${filter}&` : ""
        }pagination[page]=${currentPage}&pagination[pageSize]=${pageLimit}&populate=*&sort=createdAt:desc`,
    }),

    getSortedMovies: builder.query({
      query: ({ sort, order }) => {
        const nOrder = order ? order : "desc";

        return `/api/movies?sort=${sort}:${nOrder}&pagination[pageSize]=20&populate=*`;
      },
    }),
    searchMovie: builder.query({
      query: (keyword) =>
        `/api/movies?filters[title][$contains]=${keyword}&pagination[pageSize]=20&populate=poster`,
    }),
  }),
});

export const {
  useGetPublicMoviesQuery,
  useGetSortedMoviesQuery,
  useSearchMovieQuery,
} = publicMovieApiSlice;

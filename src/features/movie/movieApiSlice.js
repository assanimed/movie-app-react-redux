import { apiSlice } from "../../app/api/apiSlice";

export const movieApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovie: builder.query({
      query: (id) => `/api/movies/${id}?populate=*`,
    }),
    getMovies: builder.query({
      query: (params) =>
        `/api/movies?pagination[page]=${params.currentPage}&&pagination[pageSize]=${params.pageLimit}`,
      providesTags: ["movies"],
      keepUnusedDataFor: 2,
    }),
    deleteMovie: builder.mutation({
      query: (id) => ({
        url: `/api/movies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["movies"],
    }),

    postMovie: builder.mutation({
      query: (formData) => ({
        method: "POST",
        url: "/api/movies",
        body: formData,
      }),
      invalidatesTags: ["movies"],
    }),
    updateMovie: builder.mutation({
      query: ({ id, formData }) => ({
        method: "PUT",
        url: `/api/movies/${id}`,
        body: formData,
      }),
      invalidatesTags: ["movies"],
    }),
  }),
});

export const {
  useGetMovieQuery,
  useGetMoviesQuery,
  useDeleteMovieMutation,
  usePostMovieMutation,
  useUpdateMovieMutation,
} = movieApiSlice;

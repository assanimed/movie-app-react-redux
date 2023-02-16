import { apiSlice } from "../../app/api/apiSlice";

export const UsersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    connect: builder.mutation({
      query: () => ({
        url: "/api/users/me",
      }),
    }),
    getUsers: builder.query({
      query: () => "/api/users",
      providesTags: ["users"],
    }),
    addNewUser: builder.mutation({
      query: ({ username, email, password }) => ({
        url: "/api/auth/local/register",
        method: "POST",
        body: { username, email, password },
      }),
      invalidatesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/api/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddNewUserMutation,
  useDeleteUserMutation,
  useConnectMutation,
} = UsersApiSlice;

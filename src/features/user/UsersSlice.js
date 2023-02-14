import { createSlice } from "@reduxjs/toolkit";

const UsersSlice = createSlice({
  name: "Users",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export default UsersSlice.reducer;

export const { setUsers } = UsersSlice.actions;

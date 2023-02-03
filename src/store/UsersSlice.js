import { createSlice } from "@reduxjs/toolkit";

const UsersSlice = createSlice({
  name: "Users",
  initialState: {
    users: [],
    form: {
      userExists: false,
    },
  },
  reducers: {
    toggleUserExists: (state) => {
      state.form.userExists = !state.form.userExists;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export default UsersSlice.reducer;

export const { toggleUserExists, setUsers } = UsersSlice.actions;

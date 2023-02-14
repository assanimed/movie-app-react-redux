import { createSlice } from "@reduxjs/toolkit";

const Auth = createSlice({
  name: "Auth",
  initialState: {
    isAuth: false,
    user: null,
    roles: [],
  },
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
      state.isAuth = true;
    },
    unsetUser: (state) => {
      state.user = null;
      state.isAuth = false;
      state.roles = [];
    },
  },
});

export const { setUser, unsetUser } = Auth.actions;

export default Auth.reducer;

import { createSlice } from "@reduxjs/toolkit";

const Auth = createSlice({
  name: "Auth",
  initialState: {
    isAuth: false,
    user: null,
    roles: [],
    authError: null,
  },
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
      state.isAuth = true;
    },
    setAuthError: (state, action) => {
      state.authError = action.payload;
    },
    unsetUser: (state) => {
      state.user = null;
      state.isAuth = false;
      state.roles = [];
    },
  },
});

export const { setUser, unsetUser, setAuthError } = Auth.actions;

export default Auth.reducer;

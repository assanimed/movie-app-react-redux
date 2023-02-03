import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
  name: "Theme",
  initialState: {
    isDark: false,
  },
  reducers: {
    switchDarkMode: (state) => {
      state.isDark = !state.isDark;
      window.localStorage.setItem("isDark", state.isDark);
    },
    initDarkTheme: (state, action) => {
      state.isDark = action.payload;
    },
  },
});

export default ThemeSlice.reducer;

export const { switchDarkMode, initDarkTheme } = ThemeSlice.actions;

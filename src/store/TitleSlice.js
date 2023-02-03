import { createSlice } from "@reduxjs/toolkit";

const TitleSlice = createSlice({
  name: "Title",
  initialState: {
    movie: null,
    loading: false,
    error: false,
  },
  reducers: {
    setTitleMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export default TitleSlice.reducer;

export const { setTitleMovie } = TitleSlice.actions;

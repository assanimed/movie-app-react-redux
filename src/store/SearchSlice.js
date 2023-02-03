import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "Search",
  initialState: {
    movies: [],
    keyword: "",
    onSearch: false,
  },
  reducers: {
    setSearchMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSearchKeyword: (state, action) => {
      state.keyword = action.keyword;
    },
    setOnSearch: (state, action) => {
      state.onSearch = action.payload;
    },
  },
});

export default SearchSlice.reducer;

export const { setSearchMovies, setSearchKeyword, setOnSearch } =
  SearchSlice.actions;

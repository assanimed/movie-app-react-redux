import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "Filter",
  initialState: {
    isOpen: false,
    query: "",
  },
  reducers: {
    toggleStatus: (state) => {
      state.isOpen = !state.isOpen;
    },
    setFilterQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { toggleStatus, setFilterQuery } = filterSlice.actions;

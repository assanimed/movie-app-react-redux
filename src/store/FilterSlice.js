import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
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

export default FilterSlice.reducer;
export const { toggleStatus, setFilterQuery } = FilterSlice.actions;

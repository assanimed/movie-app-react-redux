import { createSlice } from "@reduxjs/toolkit";

const RoutesControlSlice = createSlice({
  name: "RoutesControl",
  initialState: {
    prevRoute: null,
  },
  reducers: {
    setPrevRoute: (state, action) => {
      state.prevRoute = action.payload;
    },
  },
});

export default RoutesControlSlice.reducer;
export const { setPrevRoute } = RoutesControlSlice.actions;

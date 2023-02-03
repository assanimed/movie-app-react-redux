import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "Modal",
  initialState: {
    target: 0, // 1 -> mobile Menu, 2 -> Delete Confirmation, 3 -> Search Modal, 4 user deletion
    isOpen: false,
    movie: null,
    user: null,
    pathname: "",
  },
  reducers: {
    setModalStatus: (state, action) => {
      state.isOpen = action.payload;
    },
    setPathName: (state, action) => {
      state.pathname = action.payload;
    },
    setModalMovie: (state, action) => {
      state.movie = action.payload;
    },
    setModalUser: (state, action) => {
      state.user = action.payload;
    },
    setTarget: (state, action) => {
      const { payload } = action;
      if (payload >= 0 && payload <= 4) state.target = payload;
    },
  },
});

export default ModalSlice.reducer;

export const {
  setModalStatus,
  setModalMovie,
  setModalUser,
  setTarget,
  setPathName,
} = ModalSlice.actions;

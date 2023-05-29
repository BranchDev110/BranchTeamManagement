import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    add: (state) => {},
    remove: (state) => {},
    edit: (state) => {},
    set: (state, action) => {
      state.value = [...action.payload];
    },
  },
});

export const { add, remove, edit, set } = memberSlice.actions;

export default memberSlice.reducer;

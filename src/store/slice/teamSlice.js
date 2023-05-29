import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const teamSlice = createSlice({
  name: "team",
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

export const { add, remove, edit, set } = teamSlice.actions;

export default teamSlice.reducer;

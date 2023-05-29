import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (data) => {},
    remove: (data) => {},
    edit: (data) => {},
    set: (data) => {},
  },
});

export const { add, remove, edit, set } = todoSlice.actions;

export default todoSlice.reducer;

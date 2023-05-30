import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = [
        ...state.value,
        {
          id: state.value.length + 1,
          data: action.payload,
          isCompleted: false,
          isDeleted: false,
        },
      ];
    },
    remove: (state) => {
      const newState = state.value.filter((item) => !item.isCompleted);
      state.value = [...newState];
    },
    edit: (data) => {},
    revert: (state, action) => {
      const newState = state.value.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
      state.value = [...newState];
    },
    set: (data) => {},
  },
});

export const { add, remove, edit, set, revert } = todoSlice.actions;

export default todoSlice.reducer;

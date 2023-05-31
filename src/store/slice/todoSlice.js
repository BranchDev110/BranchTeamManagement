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
          isEdit: false,
        },
      ];
    },
    remove: (state) => {
      const newState = state.value.map((item) =>
        item.isCompleted ? { ...item, isDeleted: true } : item
      );
      state.value = [...newState];
    },
    removeItem: (state, action) => {
      const newState = state.value.filter((item) => item.id !== action.payload);
      state.value = [...newState];
    },
    edit: (state, action) => {
      const newState = state.value.map((item) =>
        item.id === action.payload.id
          ? { ...item, data: action.payload.data, isEdit: true }
          : item
      );
      state.value = [...newState];
    },
    revert: (state, action) => {
      const newState = state.value.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
      state.value = [...newState];
    },
    set: () => {},
  },
});

export const { add, remove, edit, set, revert, removeItem } = todoSlice.actions;

export default todoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (state, action) => {
      state.value = [...action.payload];
    },
  },
});

export const { add, remove, edit, setMember } = memberSlice.actions;

export default memberSlice.reducer;

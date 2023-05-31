import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setTeam: (state, action) => {
      state.value = [...action.payload];
    },
  },
});

export const { add, remove, edit, setTeam } = teamSlice.actions;

export default teamSlice.reducer;

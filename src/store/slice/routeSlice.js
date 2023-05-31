import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: 0,
    routeName: "",
    displayName: "",
  },
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    set: (state, action) => {
      if (action.payload.id === -1) {
        alert(state.value.id);
        state.value = { ...action.payload, id: state.value.id };
      } else {
        alert(action.payload.id);
        state.value = { ...action.payload };
      }
    },
  },
});

export const { set } = routeSlice.actions;

export default routeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: 0,
    routeName: "",
    displayName: ""
  },
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    set: (state, action) => {state.value = {...action.payload}}
  },
});

export const { set } = routeSlice.actions;

export default routeSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice";
import memberReducer from "./slice/memberSlice";
import teamReducer from "./slice/teamSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    member: memberReducer,
    team: teamReducer,
  },
});

export default store;

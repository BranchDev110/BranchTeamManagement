import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice";
import memberReducer from "./slice/memberSlice";
import teamReducer from "./slice/teamSlice";
import routeReducer from './slice/routeSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    member: memberReducer,
    team: teamReducer,
    route: routeReducer
  },
});

export default store;

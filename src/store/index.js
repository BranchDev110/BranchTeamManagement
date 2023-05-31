import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist';
import todoReducer from "./slice/todoSlice";
import memberReducer from "./slice/memberSlice";
import teamReducer from "./slice/teamSlice";
import routeReducer from './slice/routeSlice';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedTodoReducer = persistReducer(persistConfig, todoReducer);

const store = configureStore({
  reducer: {
    todo: persistedTodoReducer,
    member: memberReducer,
    team: teamReducer,
    route: routeReducer
  },
});

export default store;

export const persistor = persistStore(store);

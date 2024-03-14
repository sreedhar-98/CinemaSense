import { configureStore } from "@reduxjs/toolkit";
import moviesApi from "./moviesApi";
import userReducer from "./userSlice";
import list_api from "./list_api";

const appStore = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    [list_api.reducerPath]: list_api.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([moviesApi.middleware, list_api.middleware]),
});
export default appStore;



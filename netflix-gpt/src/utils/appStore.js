import { configureStore } from "@reduxjs/toolkit";
import moviesApi from "./moviesApi";

const appStore = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
export default appStore;

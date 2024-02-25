import { configureStore } from "@reduxjs/toolkit";
import moviesApi from "./moviesApi";
import gptSearchReducer from "./gptSearchSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    gptSearch: gptSearchReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
export default appStore;

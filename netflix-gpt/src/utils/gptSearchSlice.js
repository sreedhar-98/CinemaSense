import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: null,
  reducers: {
    addMovies: (state, action) => {
      return action.payload;
    },
    clearMovies:(state,action)=>{
      return null;
    }
  },
});

export const { addMovies,clearMovies } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;

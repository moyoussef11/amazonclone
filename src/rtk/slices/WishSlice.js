import { createSlice } from "@reduxjs/toolkit";

export const wishSlice = createSlice({
  initialState: [],
  name: "wishSlice",
  reducers: {
    addToWish: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addToWish } = wishSlice.actions;
export default wishSlice.reducer;

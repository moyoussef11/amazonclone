import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/CartSlice";
import WishSlice from "./slices/WishSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wish:WishSlice,
  },
});

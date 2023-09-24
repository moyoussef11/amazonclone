import { createSlice } from "@reduxjs/toolkit";

export const cartSlices = createSlice({
  initialState: [],
  name: "cartSlices",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    deleteCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    decrementItem: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, deleteCart, decrementItem, clear, AddToWishList } =
  cartSlices.actions;
export default cartSlices.reducer;

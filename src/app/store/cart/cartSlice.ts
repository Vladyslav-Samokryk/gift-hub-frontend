import { createSlice } from "@reduxjs/toolkit";
import type { ProductCardType } from "@src/shared";

export interface CartState {
  items: ProductCardType[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCart = (state: RootState): ProductCardType[] =>
  state.cart.items;

export const cartReducer = cartSlice.reducer;

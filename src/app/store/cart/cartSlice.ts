import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { ProductCardType } from "@src/shared";
import { calcTotalPrice } from "@src/shared/helpers/calcTotalPrice";

export interface CartItem extends ProductCardType {
  count: number;
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((obj) => obj.id === action.payload.id);

      if (item) {
        item.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    decrementItem(state, action: PayloadAction<string>) {
      const item = state.items.find((obj) => obj.id === action.payload);

      if (item) {
        item.count--;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, decrementItem, removeFromCart, clearCart } =
  cartSlice.actions;

export const selectCart = (state: RootState): CartItem[] => state.cart.items;

export const cartReducer = cartSlice.reducer;

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  count: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const item = state.items.find((obj) => obj.id === action.payload);

      if (item) {
        item.count++;
      } else {
        state.items.push({
          id: action.payload,
          count: 1,
        });
      }
    },
    incrementItem(state, action: PayloadAction<string>) {
      const item = state.items.find((obj) => obj.id === action.payload);

      if (item) {
        item.count++;
      }
    },
    decrementItem(state, action: PayloadAction<string>) {
      const item = state.items.find((obj) => obj.id === action.payload);

      if (item) {
        item.count--;
        if (item.count <= 0) {
          state.items = state.items.filter((obj) => obj.id !== action.payload);
        }
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  incrementItem,
  decrementItem,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export const selectCart = (state: RootState): CartItem[] => state.cart.items;

export const cartReducer = cartSlice.reducer;

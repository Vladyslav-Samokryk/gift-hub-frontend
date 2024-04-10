import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface AuthCartState {
  count: string[];
}

const initialState: AuthCartState = {
  count: [],
};

const authCartSlice = createSlice({
  name: "authCart",
  initialState,
  reducers: {
    setAuthCount(state, action: PayloadAction<string[]>) {
      state.count = action.payload;
    },
    incrementBy(state, action: PayloadAction<string[]>) {
      const items = action.payload.filter((el) => !state.count.includes(el));

      if (items.length) {
        state.count.push(...items);
      }
    },
    decrementBy(state, action: PayloadAction<string[]>) {
      state.count = state.count.filter((el) => !action.payload.includes(el));
    },
    clear(state) {
      state.count = [];
    },
  },
});

export const { incrementBy, setAuthCount, decrementBy, clear } =
  authCartSlice.actions;

export const selectAuthCart = (state: RootState): string[] =>
  state.authCart.count;

export const authCartReducer = authCartSlice.reducer;

import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface AuthCartState {
  count: number;
}

const initialState: AuthCartState = {
  count: 0,
};

const authCartSlice = createSlice({
  name: "authCart",
  initialState,
  reducers: {
    setAuthCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    incrementBy(state, action: PayloadAction<number>) {
      state.count = state.count + action.payload;
    },
    decrementBy(state, action: PayloadAction<number>) {
      if (state.count > 0) state.count = state.count - action.payload;
    },
    clear(state) {
      state.count = 0;
    },
  },
});

export const { incrementBy, setAuthCount, decrementBy, clear } =
  authCartSlice.actions;

export const selectAuthCart = (state: RootState): number =>
  state.authCart.count;

export const authCartReducer = authCartSlice.reducer;

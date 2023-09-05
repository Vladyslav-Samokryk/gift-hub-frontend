import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface RandomRangeState {
  from: number;
  to: number;
  permition: boolean;
}

const initialState: RandomRangeState = {
  from: 200,
  to: 700,
  permition: true,
};

interface FromAction {
  from: RandomRangeState["from"];
}

interface ToAction {
  to: RandomRangeState["to"];
}

interface PermitionAction {
  permition: RandomRangeState["permition"];
}

const randomRangeSlice = createSlice({
  name: "randomRange",
  initialState,
  reducers: {
    setTo (state, action: PayloadAction<ToAction>) {
      const { to } = action.payload;
      state.to = to;
    },
    setFrom (state, action: PayloadAction<FromAction>) {
      const { from } = action.payload;
      state.from = from;
    },
    setPermition (state, action: PayloadAction<PermitionAction>) {
      const { permition } = action.payload;
      state.permition = permition;
    },
  },
});

export const { setTo, setFrom, setPermition } = randomRangeSlice.actions;
export default randomRangeSlice.reducer;

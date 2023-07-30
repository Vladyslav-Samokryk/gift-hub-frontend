import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  isAuth: boolean;
}

const initialState: UserState = {
  isAuth: false,
};

interface AuthAction {
  isAuth: UserState["isAuth"];
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authUser (state, action: PayloadAction<AuthAction>) {
      state.isAuth = action.payload.isAuth;
    },
  },
});

export const { authUser } = userSlice.actions;
export default userSlice.reducer;

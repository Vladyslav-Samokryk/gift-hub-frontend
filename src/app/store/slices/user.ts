import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "@api";

interface UserState {
  isAuth: boolean;
  first_name: string | null;
  last_name: string | null;
  token: string | null;
}

const initialState: UserState = {
  isAuth: false,
  first_name: null,
  last_name: null,
  token: null,
};

interface AuthAction {
  isAuth: UserState["isAuth"];
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authUser (state, action: PayloadAction<AuthAction>) {
      const { isAuth } = action.payload;
      state.isAuth = isAuth;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { token, user } = payload;
        const { first_name, last_name } = user;

        state.token = token;
        state.first_name = first_name;
        state.last_name = last_name;
      },
    );
  },
});

export const { authUser } = userSlice.actions;
export default userSlice.reducer;

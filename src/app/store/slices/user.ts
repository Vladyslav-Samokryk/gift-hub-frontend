import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "@api";
import type { RoleUnion } from "@src/shared/types/User";

interface UserState {
  isAuth: boolean;
  role: RoleUnion;
  first_name: string | null;
  last_name: string | null;
  token: string | null;
}

const initialState: UserState = {
  isAuth: false,
  role: "guest_user",
  first_name: null,
  last_name: null,
  token: null,
};

interface AuthAction {
  isAuth: UserState["isAuth"];
}

// add actions for role recognice
interface RoleAction {
  role: UserState["role"];
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authUser (state, action: PayloadAction<AuthAction>) {
      const { isAuth } = action.payload;
      state.isAuth = isAuth;
    },
    setRole (state, action: PayloadAction<RoleAction>) {
      const { role } = action.payload;
      state.role = role;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { token, user } = payload;
        const { role, first_name, last_name } = user;

        state.token = token;
        state.role = role;
        state.first_name = first_name;
        state.last_name = last_name;
      },
    );
  },
});

export const { authUser, setRole } = userSlice.actions;
export default userSlice.reducer;

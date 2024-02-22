import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "app/api/auth";
import type { RoleUnion } from "shared/types/User";

interface UserState {
  isAuth: boolean;
  role: RoleUnion;
  user_id: string | null;
  first_name: string | null;
  last_name: string | null;
  token: string | null;
}

const initialState: UserState = {
  user_id: null,
  isAuth: false,
  role: "guest_user",
  first_name: null,
  last_name: null,
  token: null,
};

interface AuthAction {
  isAuth: UserState["isAuth"];
}

interface RoleAction {
  role: RoleUnion;
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<AuthAction>) {
      const { isAuth } = action.payload;
      state.isAuth = isAuth;
    },
    setRole(state, action: PayloadAction<RoleAction>) {
      const { role } = action.payload;
      state.role = role;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user_id = payload.user_id;
        state.isAuth = true;
        localStorage.setItem("user_id", payload.user_id);
      },
    );
  },
});

export const { setIsAuth, setRole } = userSlice.actions;
export default userSlice.reducer;

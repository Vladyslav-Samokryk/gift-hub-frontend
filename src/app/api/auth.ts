import { baseApi } from "./base";
import type { User } from "shared/types/User";

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LogoutRequest {
  id: number;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: ({ password, username }) => ({
        url: "login",
        method: "POST",
        body: { password, username },
      }),
    }),
    logout: builder.mutation<UserResponse, LogoutRequest>({
      query: ({ id }) => ({
        url: "logout",
        method: "POST",
        body: { id },
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;

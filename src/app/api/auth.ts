import type { LoginValue } from "shared/types/Auth";
import { baseApi } from "./base";

export interface UserResponse {
  user_id: string;
  access: string;
  refresh: string;
}

export interface RefreshToken {
  refresh: string;
}

export interface AccessToken {
  access: string;
}

export interface RegistrRequest {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}

export interface LogoutRequest {
  id: number;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation<UserResponse, RegistrRequest>({
      query: ({ email, first_name, last_name, password }) => ({
        url: "accounts/guest_user/create_auth_user/",
        method: "POST",
        body: { email, first_name, last_name, password },
      }),
    }),
    login: builder.mutation<UserResponse, LoginValue>({
      query: ({ password, email }) => ({
        url: "accounts/token/",
        method: "POST",
        body: { password, email },
      }),
    }),
    logout: builder.mutation<UserResponse, LogoutRequest>({
      query: ({ id }) => ({
        url: "logout",
        method: "POST",
        body: { id },
      }),
    }),
    refresh: builder.mutation<AccessToken, RefreshToken>({
      query: ({ refresh }) => ({
        url: "accounts/token/refresh/",
        method: "POST",
        body: { refresh },
      }),
    }),
    verify: builder.mutation<string, AccessToken>({
      query: ({ access }) => ({
        url: "accounts/token/verify/",
        method: "POST",
        body: { token: access },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegistrationMutation,
  useRefreshMutation,
  useVerifyMutation,
} = authApi;

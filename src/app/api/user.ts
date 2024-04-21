import { baseApi } from "./base";

export interface ChangePasswordRequest {
  current_password: string;
  new_password: string;
}

interface ChangePasswordRequestWithToken extends ChangePasswordRequest {
  token: string;
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    changePassword: builder.mutation<string, ChangePasswordRequestWithToken>({
      query: ({ current_password, new_password, token }) => ({
        url: "accounts/auth_user/change-password/",
        method: "POST",
        body: { current_password, new_password },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useChangePasswordMutation } = userApi;

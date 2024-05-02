import { baseApi } from "./base";

interface UserInfo {
  first_name: string;
  last_name: string;
  mobile: string;
  dob: Date;
  address: {
    town: string;
    street: string;
    building: string;
    flat: string;
  };
  novaPoshta: {
    town: string;
    postOffice: string;
  };
  ukrPoshta: {
    town: string;
    postOffice: string;
  };
  gender: string;
  role: string;
  notice: string;
  get_age: number;
  email: string;
}

interface UserInfoAction {
  user: Partial<UserInfo>;
  token: string;
}

export const authUserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query<UserInfo, string>({
      query: (token) => ({
        url: "accounts/auth_user/user_info/",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    patchUserInfo: builder.mutation<string, UserInfoAction>({
      query: ({ user, token }) => ({
        url: "accounts/auth_user/user_info/",
        method: "PATCH",
        body: user,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetUserInfoQuery, usePatchUserInfoMutation } = authUserApi;

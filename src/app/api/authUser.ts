import { baseApi } from "./base";

interface UserInfo {
  first_name: string;
  last_name: string;
  mobile: string;
  dob: Date;
  address: {
    address_town: string;
    address_street: string;
    address_building: string;
    address_flat: string;
  };
  novaPoshta: {
    nova_poshta_town: string;
    nova_poshta_post_office: string;
  };
  ukrPoshta: {
    ukr_poshta_town: string;
    ukr_poshta_post_office: string;
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

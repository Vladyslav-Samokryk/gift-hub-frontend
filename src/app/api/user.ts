import { baseApi } from "./base";

export interface ChangePasswordRequest {
  current_password: string;
  new_password: string;
}

interface ChangePasswordRequestWithToken extends ChangePasswordRequest {
  token: string;
}

interface HistoryAction {
  token: string;
  page: number;
  pageSize?: number;
}

interface Product {
  product: string;
  name: string;
  img: string;
  quantity: number;
  price: string;
}

interface Result {
  id: number;
  status: string;
  order_date: string;
  products: Product[];
}

export interface HistoryResult {
  count: number;
  next: string;
  previous: string;
  results: Result[];
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
    getUserHistory: builder.query<HistoryResult, HistoryAction>({
      query: ({ token, page, pageSize = 15 }) => ({
        url: `accounts/auth_user/get_orders_history/?page=${page}&page_size=${pageSize}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useChangePasswordMutation, useGetUserHistoryQuery } = userApi;

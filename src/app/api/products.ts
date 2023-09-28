import type { ProductCardType } from "@shared";
import { baseApi } from "./base";

interface Range {
  from: number;
  to: number;
}

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularProducts: builder.query({
      query: () => ({
        url: "shop/guest_user/popular",
        method: "GET",
      }),
    }),
    getNewProducts: builder.query({
      query: () => ({
        url: "shop/guest_user/new-products",
        method: "GET",
      }),
    }),
    getRandomProducts: builder.query<ProductCardType[], Range>({
      query: (arg) => {
        const { from, to } = arg;
        return {
          url: `shop/guest_user/random-gifts/?from=${from}&to=${to}&quantity=5`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetNewProductsQuery, useGetPopularProductsQuery, useGetRandomProductsQuery } = productsApi;

import { baseApi } from "./base";

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
  }),
});

export const { useGetNewProductsQuery, useGetPopularProductsQuery } = productsApi;

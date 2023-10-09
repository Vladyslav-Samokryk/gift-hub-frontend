import type { ProductCardType } from "@shared";
import { baseApi } from "./base";

interface Range {
  range: {
    from: number;
    to: number;
  };
  lang: string;
}

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularProducts: builder.query({
      query: (lang) => ({
        url: "shop/guest_user/popular",
        method: "GET",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
    getNewProducts: builder.query({
      query: (lang) => ({
        url: "shop/guest_user/new-products",
        method: "GET",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
    getRandomProducts: builder.query<ProductCardType[], Range>({
      query: (arg) => {
        const { range, lang } = arg;
        return {
          url: `shop/guest_user/random-gifts/?from=${range.from}&to=${range.to}&quantity=5`,
          method: "GET",
          headers: {
            "Accept-Language": lang,
          },
        };
      },
    }),
  }),
});

export const {
  useGetNewProductsQuery,
  useGetPopularProductsQuery,
  useGetRandomProductsQuery,
} = productsApi;

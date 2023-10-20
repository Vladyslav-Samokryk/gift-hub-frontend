import type { ProductCardType } from "@shared";
import { baseApi } from "./base";

interface Range {
  range: {
    from: number;
    to: number;
  };
  lang: string;
}

interface Category {
  lang: string;
  categoryId: string;
  main?: string[];
  priceFrom?: number;
  priceTo?: number;
  sort?: string;
  rate?: number[] | [];
}

interface Search {
  lang: string;
  q: string;
}

interface Catalog {
  results: ProductCardType[];
}

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductsByCategory: builder.query<Catalog, Category>({
      query: ({
        lang,
        categoryId,
        main = ["available"],
        rate = [],
        priceFrom = 0,
        priceTo = 2000,
        sort = "popular",
      }) => {
        const globalRate =
          Array.isArray(rate) && rate.length > 0
            ? rate.map((val) => "&rate=" + val.toString()).join("")
            : "";
        const globalMain =
          Array.isArray(main) && main.length > 0
            ? main.map((val) => "&main=" + val).join("")
            : "";
        console.log(
          `shop/guest_user/category/${categoryId}/products?${globalMain}&sort=${sort}&price_from=${priceFrom}&price_to=${priceTo}${globalRate}`,
        );
        return {
          url: `shop/guest_user/category/${categoryId}/products?${globalMain}&sort=${sort}&price_from=${priceFrom}&price_to=${priceTo}${globalRate}`,
          method: "GET",
          headers: {
            "Accept-Language": lang,
          },
        };
      },
    }),
    getProductsBySearch: builder.query<Catalog, Search>({
      query: ({ lang, q }) => ({
        url: `shop/guest_user/search/?search=${q}`,
        method: "GET",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
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
  useGetProductsByCategoryQuery,
  useGetProductsBySearchQuery,
} = productsApi;

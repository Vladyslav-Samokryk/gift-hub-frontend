import type { ProductCardType } from "@shared";
import { baseApi } from "./base";

interface Range {
  range: {
    from: number;
    to: number;
  };
  lang: string;
  quantity: number;
}

interface Category {
  lang: string;
  categoryId: string;
  main?: string[];
  priceFrom?: number;
  priceTo?: number;
  sort?: string;
  rate?: number[] | [];
  page: number;
  productNum: number;
}

interface Search {
  lang: string;
  q: string;
  main?: string[];
  priceFrom?: number;
  priceTo?: number;
  sort?: string;
  rate?: number[] | [];
  page: number;
  productNum: number;
}

interface OneProduct {
  id: string;
  lang: string;
}

interface Catalog {
  results: ProductCardType[];
  count: number;
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
        page,
        productNum,
      }) => {
        const globalRate =
          Array.isArray(rate) && rate.length > 0
            ? rate.map((val) => "&rate=" + val.toString()).join("")
            : "";
        const globalMain =
          Array.isArray(main) && main.length > 0
            ? main.map((val) => "&main=" + val).join("")
            : "";
        return {
          url: `shop/guest_user/category/${categoryId}/products?${globalMain}&sort=${sort}&price_from=${priceFrom}&price_to=${priceTo}${globalRate}&page=${page}&page_size=${productNum}`,
          method: "GET",
          headers: {
            "Accept-Language": lang,
          },
        };
      },
    }),
    getProductsBySearch: builder.query<Catalog, Search>({
      query: ({
        lang,
        q,
        main = ["available"],
        rate = [],
        priceFrom = 0,
        priceTo = 2000,
        sort = "popular",
        page,
        productNum,
      }) => {
        const globalRate =
          Array.isArray(rate) && rate.length > 0
            ? rate.map((val) => "&rate=" + val.toString()).join("")
            : "";
        const globalMain =
          Array.isArray(main) && main.length > 0
            ? main.map((val) => "&main=" + val).join("")
            : "";
        return {
          url: `shop/guest_user/search/?search=${q}${globalMain}&sort=${sort}&price_from=${priceFrom}&price_to=${priceTo}${globalRate}&page=${page}&page_size=${productNum}`,
          method: "GET",
          headers: {
            "Accept-Language": lang,
          },
        };
      },
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
      query: ({ range, lang, quantity = 5 }) => {
        return {
          url: `shop/guest_user/random-gifts/?from=${range.from}&to=${range.to}&quantity=${quantity}`,
          method: "GET",
          headers: {
            "Accept-Language": lang,
          },
        };
      },
    }),
    getOneProduct: builder.query<ProductCardType, OneProduct>({
      query: ({ id, lang }) => {
        return {
          url: `shop/guest_user/product/${id}`,
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
  useGetOneProductQuery,
} = productsApi;

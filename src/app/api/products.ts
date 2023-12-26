import type { Range } from "shared/types/Range";
import type {
  ProductCardType,
  ProductCardDetailedType,
} from "shared/types/ProductTypes";

import { baseApi } from "./base";

export interface RangeT {
  range: Range;
  lang: string;
  categoryId?: string;
  quantity?: number;
}

interface Category {
  lang: string;
  categoryId: string;
  main?: string[];
  priceFrom?: string;
  priceTo?: string;
  sort?: string;
  rate?: string[] | [];
  page: number;
  productNum: number;
}

interface Search {
  lang: string;
  q?: string;
  main?: string[];
  priceFrom?: string;
  priceTo?: string;
  sort?: string;
  rate?: string[] | [];
  page: number;
  productNum: number;
}

interface OneProduct {
  id: string;
  lang: string;
}

interface ProductCommentsRequest {
  id: string;
  page: number;
  page_size?: number;
}

interface ProductCommentsResponse {
  count: number;
  results: Array<{
    // ім'я автора
    author: string;
    // дата написання (у форматі 12 вересня 2023)
    date: string;
    // глобальний рейтинг в зірочках
    global_rate: number;
    // сам текст коментаря
    text: string;
    // рейтинг за критеріями
    rate_by_criteria: {
      quality: number;
      photo_match: number;
      description_match: number;
      price: number;
    };
  }>;
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
          url: `shop/guest_user/search/?${
            q ? "search=" + q : ""
          }${globalMain}&sort=${sort}&price_from=${priceFrom}&price_to=${priceTo}${globalRate}&page=${page}&page_size=${productNum}`,
          method: "GET",
          headers: {
            "Accept-Language": lang,
          },
        };
      },
    }),
    getPopularProducts: builder.query({
      query: (lang) => ({
        url: "shop/guest_user/search/?sort=popular&rate=4&rate=5&page_size=4",
        method: "GET",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
    getNewProducts: builder.query({
      query: (lang) => ({
        url: "shop/guest_user/search/?sort=new5&page_size=4",
        method: "GET",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
    getRandomProducts: builder.query<ProductCardType[], RangeT>({
      query: ({ range, lang, quantity = 5, categoryId = "" }) => {
        return {
          url: `shop/guest_user/random-gifts/?from=${range.from}&to=${
            range.to
          }&quantity=${quantity}&categoryId=${categoryId || ""}`,
          method: "GET",
          headers: {
            "Accept-Language": lang,
          },
        };
      },
    }),
    getOneProduct: builder.query<ProductCardDetailedType, OneProduct>({
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
    getOneProductComments: builder.query<
      ProductCommentsResponse,
      ProductCommentsRequest
    >({
      query: ({ id, page, page_size = 3 }) => {
        return {
          url: `shop/guest_user/product/${id}/comments?page=${page}&page_size=${page_size}`,
          method: "GET",
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
  useGetOneProductCommentsQuery,
} = productsApi;

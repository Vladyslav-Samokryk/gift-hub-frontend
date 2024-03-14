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

interface ProductsByIdRequest {
  lang: string;
  productIds: string[];
}

interface Catalog {
  results: ProductCardType[];
  count: number;
}

interface WishlistAction {
  id: string | string[];
  token: string;
}

interface BasketItem {
  product_id: string;
  amount: number;
}

interface BasketAction {
  products: BasketItem[];
  token: string;
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
        url: "shop/guest_user/search/?sort=new&page_size=4",
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
    getProductsById: builder.query<ProductCardType[], ProductsByIdRequest>({
      query: ({ productIds, lang }) => {
        const idParam = productIds.map((el) => `product_id=${el}`).join("&");
        return {
          url: `shop/guest_user/product/?${idParam}`,
          method: "GET",
          headers: {
            "Accept-Language": lang,
          },
        };
      },
    }),
    postOrder: builder.mutation({
      query: ({ options, products }) => {
        return {
          url: `shop/guest_user/order_create/`,
          method: "POST",
          body: {
            ...options,
            items: [...products],
          },
        };
      },
    }),
    addToWishlist: builder.mutation<unknown, WishlistAction>({
      query: ({ id, token }) => {
        return {
          url: `shop/auth_user/wishlist/`,
          method: "POST",
          body: {
            id,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    deleteFromWishlist: builder.mutation<unknown, WishlistAction>({
      query: ({ id, token }) => {
        const globalIds = Array.isArray(id)
          ? id.map((val) => "id=" + val).join("&")
          : "id=" + id;
        return {
          url: `shop/auth_user/wishlist/?${globalIds}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getUserWishlist: builder.query({
      query: ({ token }) => {
        return {
          url: `shop/auth_user/wishlist`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token as string}`,
          },
        };
      },
    }),
    addToBasket: builder.mutation<unknown, BasketAction>({
      query: ({ products, token }) => {
        return {
          url: `shop/auth_user/basket/`,
          method: "POST",
          body: products,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getUserBasket: builder.query({
      query: ({ token }) => {
        return {
          url: `shop/auth_user/basket`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token as string}`,
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
  useGetOneProductCommentsQuery,
  useGetProductsByIdQuery,
  usePostOrderMutation,
  useAddToWishlistMutation,
  useDeleteFromWishlistMutation,
  useGetUserWishlistQuery,
  useAddToBasketMutation,
  useGetUserBasketQuery,
} = productsApi;

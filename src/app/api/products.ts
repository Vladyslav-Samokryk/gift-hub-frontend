import type { Range } from "shared/types/Range";
import type {
  ProductCardType,
  ProductCardDetailedType,
} from "shared/types/ProductTypes";

import { baseApi } from "./base";
import { generateHeader, urlParams } from "shared/helpers/urlParams";

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
  token: string;
}

interface ProductCommentsRequest {
  id: string;
  page: number;
  page_size?: number;
}

interface ProductCommentsResponse {
  count: number;
  results: Array<{
    author: string;
    date: string;
    global_rate: number;
    text: string;
    rate_by_criteria: {
      quality: number;
      photo_match: number;
      description_match: number;
      price: number;
    };
  }>;
}

export interface AddProductCommentRequest {
  productId: string | null;
  comment: string;
  rate: number;
  criterias: {
    description_match: number;
    photo_match: number;
    price: number;
    quality: number;
  };
  token: string;
}

interface ProductsByIdRequest {
  lang: string;
  productIds: string[];
  token?: string;
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
  isSecretPresent?: boolean;
  amount: number;
}

interface BasketAction {
  products: BasketItem[];
  token: string;
}

interface BasketDeleteAction {
  product_id: string;
  token: string;
}

interface CategoryAction {
  category: Category;
  token?: string;
}

interface SearchAction {
  search: Search;
  token?: string;
}

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductsByCategory: builder.query<Catalog, CategoryAction>({
      query: ({ category, token }) => {
        const {
          lang,
          categoryId,
          main = ["available"],
          rate = [],
          priceFrom = 0,
          priceTo = 2000,
          sort = "popular",
          page,
          productNum,
        } = category;
        const globalRate = urlParams("rate", rate);
        const globalMain = urlParams("main", main);
        return {
          url: `shop/guest_user/category/${categoryId}/products?${globalMain}&sort=${sort}&price_from=${priceFrom}&price_to=${priceTo}${globalRate}&page=${page}&page_size=${productNum}`,
          method: "GET",
          headers: generateHeader(token, lang),
        };
      },
    }),
    getProductsBySearch: builder.query<Catalog, SearchAction>({
      query: ({ search, token }) => {
        const {
          lang,
          q,
          main = ["available"],
          rate = [],
          priceFrom = 0,
          priceTo = 2000,
          sort = "popular",
          page,
          productNum,
        } = search;
        const globalRate = urlParams("rate", rate);
        const globalMain = urlParams("main", main);
        return {
          url: `shop/guest_user/search/?${
            q ? "search=" + q : ""
          }${globalMain}&sort=${sort}&price_from=${priceFrom}&price_to=${priceTo}${globalRate}&page=${page}&page_size=${productNum}`,
          method: "GET",
          headers: generateHeader(token, lang),
        };
      },
    }),
    getPopularProducts: builder.query({
      query: ({ lang, token }) => {
        return {
          url: "shop/guest_user/search/?sort=popular&rate=4&rate=5&page_size=4",
          method: "GET",
          headers: generateHeader(token, lang),
        };
      },
    }),
    getNewProducts: builder.query({
      query: ({ lang, token }) => {
        return {
          url: "shop/guest_user/search/?sort=new&page_size=4",
          method: "GET",
          headers: generateHeader(token, lang),
        };
      },
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
      query: ({ id, lang, token }) => {
        return {
          url: `shop/guest_user/product/${id}`,
          method: "GET",
          headers: generateHeader(token, lang),
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
    addProductComment: builder.mutation<unknown, AddProductCommentRequest>({
      query: ({ productId, comment, rate, criterias, token }) => ({
        url: `shop/auth_user/product/${productId}/comments`,
        method: "POST",
        body: {
          comment,
          rate,
          criterias,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getProductsById: builder.query<ProductCardType[], ProductsByIdRequest>({
      query: ({ productIds, lang, token }) => {
        return {
          url: `shop/guest_user/products/get_list_products_by_id/`,
          method: "POST",
          body: {
            product_id: productIds,
          },
          headers: generateHeader(token, lang),
        };
      },
    }),
    postOrder: builder.mutation({
      query: ({ options, products, token }) => {
        const requestConfig = {
          url: `shop/guest_user/order_create/`,
          method: "POST",
          body: {
            ...options,
            items: [...products],
          },
          headers: {},
        };

        if (token.length) {
          requestConfig.headers = {
            Authorization: `Bearer ${token as string}`,
          };
        }

        return requestConfig;
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
        return {
          url: `shop/auth_user/wishlist/del_list_products/`,
          method: "POST",
          body: {
            product_id: Array.isArray(id) ? [...id] : [id],
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getUserWishlist: builder.query({
      query: ({ token, lang }) => {
        return {
          url: `shop/auth_user/wishlist`,
          method: "GET",
          headers: {
            "Accept-Language": lang,
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
    deleteFromBasket: builder.mutation<unknown, BasketDeleteAction>({
      query: ({ product_id, token }) => {
        return {
          url: `shop/auth_user/basket/?product_id=${product_id}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    clearBasket: builder.mutation<unknown, string>({
      query: (token) => {
        return {
          url: `shop/auth_user/basket/clear/`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getUserBasket: builder.query({
      query: ({ token, lang }) => {
        return {
          url: `shop/auth_user/basket`,
          method: "GET",
          headers: {
            "Accept-Language": lang,
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
  useAddProductCommentMutation,
  useGetProductsByIdQuery,
  usePostOrderMutation,
  useAddToWishlistMutation,
  useDeleteFromWishlistMutation,
  useGetUserWishlistQuery,
  useAddToBasketMutation,
  useGetUserBasketQuery,
  useDeleteFromBasketMutation,
  useClearBasketMutation,
} = productsApi;

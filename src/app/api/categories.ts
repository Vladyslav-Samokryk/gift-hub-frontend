import type { Categories } from "shared/types/Categories";
import { baseApi } from "./base";

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<Categories[], string>({
      query: (lang) => ({
        url: "shop/guest_user/get_all_categories",
        method: "GET",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
    getCategoryId: builder.query<string, string>({
      query: (url) => ({
        url: `shop/guest_user/category/url/${url}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryIdQuery } = categoriesApi;

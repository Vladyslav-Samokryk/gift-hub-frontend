import type { Categories } from "@shared";
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
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;

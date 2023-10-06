import { baseApi } from "./base";
import type { Banner } from "@shared";

export const bannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBanners: builder.query<Banner[], string>({
      query: (lang) => ({
        url: "shop/guest_user/banner_list",
        method: "GET",
        headers: {
          "Accept-Language": lang,
        },
      }),
    }),
  }),
});

export const { useGetBannersQuery } = bannerApi;

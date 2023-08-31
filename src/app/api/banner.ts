import { baseApi } from "./base";
import type { Banner } from "@shared";

export const bannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    banners: builder.query<Banner, string>({
      query: () => ({
        url: "shop/guest_user/banner_list",
        method: "GET",
      }),
    }),
  }),
});

export const { useBannersQuery } = bannerApi;

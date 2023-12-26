import { API_URL } from "app/api/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = (getState() as RootState).user.token;

      const listOfRequiredJWTEndpoints = ["login", "logout"];
      if (token && listOfRequiredJWTEndpoints.includes(endpoint)) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});

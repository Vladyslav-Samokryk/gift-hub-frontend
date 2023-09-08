import { combineReducers } from "@reduxjs/toolkit";
import { productsApi, bannerApi, authApi, baseApi } from "@api";

import { userReducer } from "./slices";

const rootReducer = combineReducers({
  user: userReducer,
  [productsApi.reducerPath]: baseApi.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [bannerApi.reducerPath]: bannerApi.reducer,
});

export default rootReducer;

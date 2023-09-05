import { combineReducers } from "@reduxjs/toolkit";
import { productsApi, bannerApi, authApi, baseApi } from "@api";

import { userReducer, randomRangeReducer } from "./slices";

const rootReducer = combineReducers({
  user: userReducer,
  randomRange: randomRangeReducer,
  [productsApi.reducerPath]: baseApi.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [bannerApi.reducerPath]: bannerApi.reducer,
});

export default rootReducer;

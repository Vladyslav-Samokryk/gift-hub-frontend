import { combineReducers } from "@reduxjs/toolkit";
import { authApi, baseApi, productsApi } from "@api";

import { userReducer } from "./slices";

const rootReducer = combineReducers({
  user: userReducer,
  [productsApi.reducerPath]: baseApi.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

export default rootReducer;

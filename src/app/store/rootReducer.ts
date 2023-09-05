import { combineReducers } from "@reduxjs/toolkit";
import { bannerApi, authApi, baseApi } from "@api";

import { userReducer } from "./slices";

const rootReducer = combineReducers({
  user: userReducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [bannerApi.reducerPath]: bannerApi.reducer,
});

export default rootReducer;

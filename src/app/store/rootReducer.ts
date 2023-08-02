import { combineReducers } from "@reduxjs/toolkit";
import { authApi, baseApi } from "@api";

import { userReducer } from "./slices";

const rootReducer = combineReducers({
  user: userReducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

export default rootReducer;

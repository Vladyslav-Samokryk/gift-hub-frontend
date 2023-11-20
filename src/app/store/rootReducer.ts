import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "@reduxjs/toolkit";
import { productsApi, bannerApi, authApi, baseApi } from "@api";

import { userReducer } from "./slices";
import { cartReducer } from "./cart/cartSlice";

const persistCartConfig = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);

const rootReducer = combineReducers({
  user: userReducer,
  cart: persistedCartReducer,
  [productsApi.reducerPath]: baseApi.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [bannerApi.reducerPath]: bannerApi.reducer,
});

export default rootReducer;

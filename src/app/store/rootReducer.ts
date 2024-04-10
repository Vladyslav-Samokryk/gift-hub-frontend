import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "@reduxjs/toolkit";

import { catalogReducer, userReducer } from "./slices";
import { cartReducer } from "./cart/cartSlice";
import { baseApi } from "app/api/base";
import { authCartReducer } from "./cart/authCartSlice";

const persistCartConfig = {
  key: "cart",
  storage,
};

const persistAuthCartConfig = {
  key: "authCart",
  storage,
};

const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);
const persistedAuthCartReducer = persistReducer(
  persistAuthCartConfig,
  authCartReducer,
);

const rootReducer = combineReducers({
  user: userReducer,
  catalog: catalogReducer,
  cart: persistedCartReducer,
  authCart: persistedAuthCartReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;

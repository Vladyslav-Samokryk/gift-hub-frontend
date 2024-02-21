import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "@reduxjs/toolkit";

import { catalogReducer, userReducer } from "./slices";
import { cartReducer } from "./cart/cartSlice";
import { baseApi } from "app/api/base";

const persistCartConfig = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);

const rootReducer = combineReducers({
  user: userReducer,
  catalog: catalogReducer,
  cart: persistedCartReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;

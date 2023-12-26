import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import type { AnyAction, Dispatch, Middleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { createLogger } from "redux-logger";

import { isDevEnv } from "app/api/config";
import rootReducer from "app/store/rootReducer";
import { authApi } from "app/api/auth";
import { bannerApi } from "app/api/banner";
import { baseApi } from "app/api/base";
import { productsApi } from "app/api/products";

type MiddlewarePointType = Middleware<
  Record<string, unknown>,
  unknown,
  Dispatch<AnyAction>
>;
type GetDefaultMiddlewareType = Array<
  Middleware<Record<string, unknown>, unknown, Dispatch<AnyAction>>
>;

const middleware: MiddlewarePointType[] = [];
if (isDevEnv) {
  const logger = createLogger({
    collapsed: true,
    diff: true,
  });
  middleware.push(logger);
}

export const setupStore = (): ReturnType<typeof configureStore> => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      (
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }) as GetDefaultMiddlewareType
      ).concat(
        ...middleware,
        baseApi.middleware as MiddlewarePointType,
        authApi.middleware as MiddlewarePointType,
        bannerApi.middleware as MiddlewarePointType,
        productsApi.middleware as MiddlewarePointType,
      ),
    devTools: isDevEnv,
    preloadedState: {},
  });
};

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = setupStore();
export const persistor = persistStore(store);

setupListeners(store.dispatch);

/* eslint-disable @typescript-eslint/no-explicit-any */
import type { QueryActionCreatorResult } from "@reduxjs/toolkit/dist/query/core/buildInitiate";
import type { ProductCardType } from "shared/types/ProductTypes";

export interface Basket {
  isBasketOpen: boolean;
  setIsBasketOpen: (isBasketOpen: boolean) => void;
}

export interface CartFullItem extends ProductCardType {
  count: number;
  isSecretPresent: boolean;
}

export interface BasketItemTypes {
  product: CartFullItem;
  options?: Array<{ values: string[] }>;
  refetch?: () => QueryActionCreatorResult<any>;
}

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
}

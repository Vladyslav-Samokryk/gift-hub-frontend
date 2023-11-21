import type { ProductCardType } from "..";

export interface Basket {
  isBasketOpen: boolean;
  setIsBasketOpen: (isBasketOpen: boolean) => void;
}

export interface BasketItemTypes {
  product: ProductCardType;
  count: number;
  options?: Array<{ values: string[] }>;
}

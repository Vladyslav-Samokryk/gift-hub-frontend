import type { ProductCardType } from "shared/types/ProductTypes";

export interface Basket {
  isBasketOpen: boolean;
  setIsBasketOpen: (isBasketOpen: boolean) => void;
}

export interface BasketItemTypes {
  product: ProductCardType;
  options?: Array<{ values: string[] }>;
}

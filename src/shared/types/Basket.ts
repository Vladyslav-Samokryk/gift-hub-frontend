export interface Basket {
  isBasketOpen: boolean;
  setIsBasketOpen: (isBasketOpen: boolean) => void;
}

export interface BasketItemTypes {
  img: string;
  id: string;
  name: string;
  price: number;
  globalRating: number;
  discount: number;
  options?: Array<{ values: string[] }>;
  onDelete: (id: string) => void;
  onUpdateCounter: (id: string, newCounter: number) => void;
}

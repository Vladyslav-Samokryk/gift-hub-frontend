import type { CartItem } from "@src/app/store/cart/cartSlice";

export const calcTotalPrice = (items: CartItem[]): number => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

import type { CartItem } from "app/store/cart/cartSlice";

export function getDiscount(items: CartItem[]): number {
  return items.reduce(
    (sum, el) => (el.discount ? el.price * el.discount * el.count + sum : 0),
    0,
  );
}

export function getFullPrice(items: CartItem[]): number {
  return items.reduce((sum, el) => el.price * el.count + sum, 0);
}

export function getTotalPrice(items: CartItem[]): number {
  return items.reduce(
    (sum, el) =>
      el.discount
        ? el.price * el.count * (1 - el.discount) + sum
        : el.price * el.count + sum,
    0,
  );
}

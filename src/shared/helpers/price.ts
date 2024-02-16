import type { CartFullItem } from "shared/types/Basket";

export function getDiscount(items: CartFullItem[] | null): number {
  if (!items) {
    return 0;
  }

  return items.reduce(
    (sum, el) => (el.discount ? el.discount * el.count + sum : 0),
    0,
  );
}

export function getFullPrice(items: CartFullItem[] | null): string | number {
  if (!items) {
    return 0;
  }

  return items.reduce((sum, el) => el.price * el.count + sum, 0).toFixed(2);
}

export function getTotalPrice(items: CartFullItem[] | null): string | number {
  if (!items) {
    return 0;
  }

  return items
    .reduce(
      (sum, el) =>
        el.discount
          ? (el.price - el.discount) * el.count + sum
          : el.price * el.count + sum,
      0,
    )
    .toFixed(2);
}

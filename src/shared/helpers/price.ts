import type { ProductCardType } from "shared/types/ProductTypes";

export function getDiscount(items: ProductCardType[] | null): number {
  if (!items) {
    return 0;
  }

  return items.reduce(
    (sum, el) =>
      el.discount ? el.price * el.discount * (el.count ?? 1) + sum : 0,
    0,
  );
}

export function getFullPrice(items: ProductCardType[] | null): number {
  if (!items) {
    return 0;
  }

  return items.reduce((sum, el) => el.price * (el.count ?? 1) + sum, 0);
}

export function getTotalPrice(items: ProductCardType[] | null): number {
  if (!items) {
    return 0;
  }

  return items.reduce(
    (sum, el) =>
      el.discount
        ? el.price * (el.count ?? 1) * (1 - el.discount) + sum
        : el.price * (el.count ?? 1) + sum,
    0,
  );
}

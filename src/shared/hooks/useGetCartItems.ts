import { useGetProductsByIdQuery } from "app/api/products";
import { useAppSelector } from "app/store";
import { selectCart } from "app/store/cart/cartSlice";
import { useEffect, useState } from "react";
import { useGetCurrentLang } from "./useGetCurrentLang";
import type { CartFullItem } from "shared/types/Basket";

export default function useGetCartItems(): CartFullItem[] | null {
  const cartItems = useAppSelector(selectCart);
  const productIds = cartItems.map((obj) => obj.id);
  const lang = useGetCurrentLang();
  const [cart, setCart] = useState<CartFullItem[] | null>(null);

  const { data } = useGetProductsByIdQuery({ productIds, lang });

  useEffect(() => {
    if (data) {
      setCart(
        data.map((obj) => {
          const item = cartItems.find((el) => el.id === obj.id);
          return {
            ...obj,
            count: item?.count ?? 1,
            isSecretPresent: item?.isSecretPresent ?? false,
          };
        }),
      );
    }
  }, [data, cartItems]);

  return cart;
}

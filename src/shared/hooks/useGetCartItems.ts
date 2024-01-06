import { useGetProductsByIdQuery } from "app/api/products";
import { useAppSelector } from "app/store";
import { selectCart } from "app/store/cart/cartSlice";
import { useEffect, useState } from "react";
import type { ProductCardType } from "shared/types/ProductTypes";
import { useGetCurrentLang } from "./useGetCurrentLang";

export default function useGetCartItems(): ProductCardType[] | null {
  const cartItems = useAppSelector(selectCart);
  const productIds = cartItems.map((obj) => obj.id);
  const lang = useGetCurrentLang();
  const [cart, setCart] = useState<ProductCardType[] | null>(null);

  const { data } = useGetProductsByIdQuery({ productIds, lang });

  useEffect(() => {
    if (data) {
      setCart(
        data.map((obj) => {
          const item = cartItems.find((el) => el.id === obj.id);
          return { ...obj, count: item?.count };
        }),
      );
    }
  }, [data]);
  return cart;
}

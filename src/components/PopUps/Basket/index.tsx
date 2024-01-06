import { Close } from "shared/assets/svg/CloseIcons";
import { useTranslation } from "react-i18next";
import BasketItem from "./BasketItem";
import { useAppSelector } from "app/store";
import { selectCart } from "app/store/cart/cartSlice";
import { getFullPrice, getTotalPrice, getDiscount } from "shared/helpers/price";
import type { ModalDialogProps } from "shared/types/Modals";
import { motion } from "framer-motion";
import { CURRENCY } from "app/api/config";
import { EmptyBasketIcon } from "shared/assets/svg/Basket";
import { useGetProductsByIdQuery } from "app/api/products";
import { useGetCurrentLang } from "shared/hooks/useGetCurrentLang";
import { useEffect, useState } from "react";
import type { ProductCardType } from "shared/types/ProductTypes";

const BasketPopUp = ({ onClose }: ModalDialogProps): JSX.Element => {
  const { t } = useTranslation();
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

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.25,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.2 }}
        onClick={onClose}
        className="fixed left-0 top-0 z-0 flex h-full w-full items-center justify-center bg-gray-900 px-5"
      />

      <section className="fixed right-0 top-0 z-[100] flex h-full max-h-[1024px] w-full max-w-[637px] justify-center rounded-br-[10px] rounded-tl-[10px] bg-white p-5">
        <div className="flex w-full flex-col bg-white">
          <div className="flex w-full justify-between p-2">
            <h2 className="h5 text-black">{t("basket.heading")}</h2>
            <button onClick={onClose}>
              <Close />
            </button>
          </div>
          <hr />
          <ul className=" mt-9 flex h-full list-none flex-col gap-5 overflow-scroll p-0">
            {cart?.length ? (
              cart.map((el) => <BasketItem key={el.id} product={el} />)
            ) : (
              <div className="flex flex-col items-center gap-2 text-secondary-900">
                <EmptyBasketIcon />
                <p className="primary-bold">{t("basket.empty.heading")}</p>
                <p>{t("basket.empty.description")}</p>
              </div>
            )}
          </ul>
          <hr className="mb-5" />

          <div className="flex justify-between">
            <div className="flex gap-5">
              <div className="flex flex-col gap-2">
                <p className="primary">{t("basket.priceText")}</p>
                <p className="primary">{t("basket.discountText")}</p>
                <p className="h6">{t("basket.totalPriceText")}</p>
              </div>
              <div className="flex flex-col justify-between font-light">
                <p>
                  {getFullPrice(cart)} {CURRENCY}
                </p>
                <p>
                  {getDiscount(cart)} {CURRENCY}
                </p>
                <p className="h6">{getTotalPrice(cart)}₴</p>
              </div>
            </div>
            <button className="btn btn-effect h-12">
              {t("basket.orderButtonText")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BasketPopUp;

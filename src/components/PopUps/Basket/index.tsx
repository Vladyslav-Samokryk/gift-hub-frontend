import { Close } from "@src/shared";
import type { Basket } from "@src/shared/types/Basket";
import { useTranslation } from "react-i18next";
import BasketItem from "./BasketItem";
import { useAppSelector } from "@src/app/store";
import { selectCart } from "@src/app/store/cart/cartSlice";
import {
  getFullPrice,
  getTotalPrice,
  getDiscount,
} from "@src/shared/helpers/price";

const BasketPopUp = ({ setIsBasketOpen }: Basket): JSX.Element => {
  const { t } = useTranslation();
  const cart = useAppSelector(selectCart);

  return (
    <section className="fixed right-0 top-0 z-[100] flex h-full max-h-[1024px] w-full max-w-[637px] justify-center rounded-br-[10px] rounded-tl-[10px] bg-white p-5">
      <div className="flex w-full flex-col bg-white">
        <div className="flex w-full justify-between p-2">
          <h2 className="h5 text-black">{t("basket.heading")}</h2>
          <button onClick={() => setIsBasketOpen(false)}>
            <Close />
          </button>
        </div>
        <hr />
        <ul className="mt-9 flex h-full list-none flex-col gap-5 overflow-scroll p-0">
          {cart.map((el) => (
            <BasketItem key={el.id} product={el} count={el.count} />
          ))}
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
              <p>{getFullPrice(cart)} ₴</p>
              <p>{getDiscount(cart)}₴</p>
              <p className="h6">{getTotalPrice(cart)}₴</p>
            </div>
          </div>
          <button className="btn btn-effect h-12">
            {t("basket.orderButtonText")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BasketPopUp;

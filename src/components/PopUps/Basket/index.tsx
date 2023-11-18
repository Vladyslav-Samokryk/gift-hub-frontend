import { productCardMock } from "@src/mock";
import { Close } from "@src/shared";
import type { Basket } from "@src/shared/types/Basket";
import type { ProductCardType } from "@src/shared/types/ProductTypes";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BasketItem from "./BasketItem";

const BasketPopUp: React.FC<Basket> = ({ setIsBasketOpen }) => {
  const { t } = useTranslation();
  const [basketItems, setBasketItems] =
    useState<ProductCardType[]>(productCardMock);
  const handleDeleteItem = (itemId: string): void => {
    const updatedBasket = basketItems.filter((item) => item.id !== itemId);
    setBasketItems(updatedBasket);
  };
  const handleUpdateCounter = (id: string, newCounter: number): void => {
    setBasketItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: newCounter } : item,
      ),
    );
  };

  return (
    <div className="fixed right-0 top-0 z-[100] flex h-full max-h-[1024px] w-full max-w-[637px] justify-center rounded-br-[10px] rounded-tl-[10px] bg-white px-5 py-10">
      <div className="flex w-full flex-col bg-white">
        <div className="flex w-full justify-between p-4">
          <h2 className="font-rubik text-3xl font-medium text-black">
            {t("basket.heading")}
          </h2>
          <button onClick={() => setIsBasketOpen(false)}>
            <Close />
          </button>
        </div>
        <div className="mt-[7px] h-hr bg-gray-900"></div>
        <ul className="mt-9 flex h-full list-none flex-col gap-5 overflow-scroll p-0">
          {basketItems.map((el) => (
            <BasketItem
              key={el.id}
              id={el.id}
              img={el.img}
              name={el.name}
              price={el.price}
              globalRating={el.global_rating}
              discount={el.discount}
              onUpdateCounter={handleUpdateCounter}
              onDelete={handleDeleteItem}
            />
          ))}
        </ul>
        <div className="mb-5 h-hr bg-blue-200"></div>
        <div className="flex justify-between">
          <div className="flex gap-5">
            <div className="flex flex-col gap-4 font-rubik text-black">
              <span className="text-lg font-light leading-[1.2]">
                {t("basket.priceText")}
              </span>
              <span className="text-lg font-light leading-[1.2]">
                {t("basket.discountText")}
              </span>
              <span className="text-[22px] font-medium">
                {t("basket.totalPriceText")}
              </span>
            </div>
            <div className="flex flex-col justify-between font-light">
              <span>
                {basketItems.reduce((sum, el) => el.price * el.count + sum, 0)}{" "}
                ₴
              </span>
              <span>
                {basketItems.reduce(
                  (sum, el) => el.price * el.discount * el.count + sum,
                  0,
                )}{" "}
                ₴
              </span>
              <span className="text-[22px] font-medium">
                {basketItems.reduce(
                  (sum, el) => el.price * el.count * (1 - el.discount) + sum,
                  0,
                )}{" "}
                <span className="font-normal">₴</span>
              </span>
            </div>
          </div>
          <button className="h-fit w-fit rounded-[10px] bg-[#3268F8] px-6 py-3 text-sm font-medium leading-6 text-white">
            {t("basket.orderButtonText")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketPopUp;

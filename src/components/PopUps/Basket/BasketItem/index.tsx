import { CURRENCY } from "app/api/config";
import {
  incrementItem,
  decrementItem,
  removeFromCart,
} from "app/store/cart/cartSlice";
import { Wishlist } from "shared/assets/svg/Wishlist";
import { CountMinus, CountPlus } from "shared/assets/svg/BasketCounter";
import Trash from "shared/assets/svg/Trash";
import { getTotalPrice } from "shared/helpers/price";
import type { BasketItemTypes } from "shared/types/Basket";
// import type { SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import { SecretGiftBasket } from "shared/assets/svg/SecretGift";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

const BasketItem = ({ product, options }: BasketItemTypes): JSX.Element => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleIncrementCounter = (id: string): void => {
    dispatch(incrementItem(id));
  };

  const handleDecrementCounter = (id: string): void => {
    dispatch(decrementItem(id));
  };

  const handleDeleteItem = (id: string): void => {
    dispatch(removeFromCart(id));
  };

  // const handleAddToWishlist = (e: SyntheticEvent): void => {
  //  TODO: Adiing to wishlist
  // };

  return (
    <li>
      <div className="grid h-fit grid-cols-[4fr_1fr_2fr] gap-2">
        <div className="flex h-fit gap-3">
          {product.isSecretPresent ? (
            <SecretGiftBasket />
          ) : (
            <div className="h-28 w-28 shrink-0 rounded-xl border border-black overflow-hidden">
              <img
                src={product.img}
                className="w-full h-full object-cover object-top"
                alt={product.name}
              />
            </div>
          )}
          <div className="flex flex-col items-center justify-between">
            <p className="primary">
              {product.isSecretPresent ? t("secret_gift.title") : product.name}
            </p>
            {options && (
              <ul className="flex flex-col items-center justify-between">
                {options.map((option, index) => (
                  <select key={index} className="mt-2">
                    {option.values.map((value, valueIndex) => (
                      <option key={valueIndex} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                ))}
              </ul>
            )}
          </div>
        </div>
        {!product.isSecretPresent ? (
          <div className="flex h-6 gap-2">
            <button
              className={classNames("text-blue-700 hover:text-blue-800", {
                "text-blue-800": product.count === 1,
              })}
              onClick={() => handleDecrementCounter(product.id)}
              disabled={product.count === 1}
            >
              <CountMinus />
            </button>
            <span>{product.count}</span>
            <button
              className={classNames("text-blue-700 hover:text-blue-800", {
                "text-blue-800": product.count >= product.quantity,
              })}
              onClick={() => handleIncrementCounter(product.id)}
              disabled={product.count >= product.quantity}
            >
              <CountPlus />
            </button>
          </div>
        ) : (
          <span>{product.count}</span>
        )}

        <div className="flex flex-col justify-between">
          <div className="flex justify-end gap-6">
            {!product.isSecretPresent && (
              <button className="group transition-all">
                <Wishlist />
              </button>
            )}
            <button onClick={() => handleDeleteItem(product.id)}>
              <Trash />
            </button>
          </div>
          <div className="flex justify-end gap-4 text-lg font-light">
            <p>
              {getTotalPrice([product])} {CURRENCY}
            </p>
            {product.discount > 0 && (
              <p className="text-blue-200 line-through">
                {(product.price * product.count).toFixed(2)} {CURRENCY}
              </p>
            )}
          </div>
        </div>
      </div>
      <hr className="mt-5" />
    </li>
  );
};

export default BasketItem;

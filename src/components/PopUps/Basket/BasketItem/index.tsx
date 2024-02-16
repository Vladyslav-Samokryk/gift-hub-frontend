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

  console.log(product);

  return (
    <li>
      <div className="grid h-fit grid-cols-[5fr_1fr_2fr] gap-2">
        <div className="flex h-fit gap-3">
          {product.isSecretPresent ? (
            <SecretGiftBasket />
          ) : (
            <img
              src={product.img}
              className="h-28 w-28 shrink-0 rounded-xl border border-black"
              alt={product.name}
            />
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
              className="text-blue-700 hover:text-blue-800"
              onClick={() => handleDecrementCounter(product.id)}
            >
              <CountMinus />
            </button>
            <span>{product?.count}</span>
            <button
              className="text-blue-700 hover:text-blue-800"
              onClick={() => handleIncrementCounter(product.id)}
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
                {product.price * product.count} {CURRENCY}
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

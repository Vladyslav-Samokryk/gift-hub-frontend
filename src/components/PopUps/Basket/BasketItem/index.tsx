/* eslint-disable @typescript-eslint/no-misused-promises */
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
import { useDispatch } from "react-redux";
import { SecretGiftBasket } from "shared/assets/svg/SecretGift";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import {
  useAddToBasketMutation,
  useAddToWishlistMutation,
  useDeleteFromBasketMutation,
  useDeleteFromWishlistMutation,
} from "app/api/products";
import { useCookies } from "react-cookie";
import { useModals } from "app/context/modalContext/useModals";
import { MODALS } from "app/context/modalContext/modals";
import { useState } from "react";
import { useAuth } from "shared/hooks/useAuth";
import { decrementBy } from "app/store/cart/authCartSlice";

const BasketItem = ({
  product,
  options,
  refetch,
}: BasketItemTypes): JSX.Element => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [cookies] = useCookies();
  const [addToBasket] = useAddToBasketMutation();
  const [deleteFromBasket] = useDeleteFromBasketMutation();
  const [deleteFromWishlist] = useDeleteFromWishlistMutation();
  const [addToWishlist] = useAddToWishlistMutation();
  const { onOpen } = useModals();
  const [isProductInWishlist, setIsProductInWishlist] = useState(false);
  const { isAuth } = useAuth();

  const handleIncrementCounter = async (): Promise<void> => {
    if (isAuth) {
      await addToBasket({
        products: [{ product_id: product.id, amount: product.count + 1 }],
        token: cookies.access,
      }).then(() => {
        if (refetch) void refetch();
      });
    } else dispatch(incrementItem(product.id));
  };

  const handleDecrementCounter = async (): Promise<void> => {
    if (isAuth) {
      await addToBasket({
        products: [{ product_id: product.id, amount: product.count - 1 }],
        token: cookies.access,
      }).then(() => {
        if (refetch) void refetch();
      });
    } else dispatch(decrementItem(product.id));
  };

  const handleDeleteItem = async (): Promise<void> => {
    if (isAuth) {
      await deleteFromBasket({
        product_id: product.id,
        token: cookies.access,
      }).then(() => {
        dispatch(decrementBy(1));
        if (refetch) void refetch();
      });
    } else dispatch(removeFromCart(product.id));
  };

  const handleWishlistAction = (): void => {
    void (isAuth
      ? !isProductInWishlist
        ? addToWishlist({ id: product.id, token: cookies.access })
        : deleteFromWishlist({ id: product.id, token: cookies.access })
      : onOpen({
          name: MODALS.LOGIN,
          data: { error: true },
        }));
    setIsProductInWishlist((prev) => !prev);
  };
  return (
    <li>
      <div className="grid h-fit grid-cols-[4fr_1fr_2fr] gap-2">
        <div className="flex h-fit gap-3">
          {product.isSecretPresent ? (
            <SecretGiftBasket />
          ) : (
            <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl border border-black">
              <img
                src={product.img}
                className="h-full w-full object-cover object-top"
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
              onClick={handleDecrementCounter}
              disabled={product.count === 1}
            >
              <CountMinus />
            </button>
            <span>{product.count}</span>
            <button
              className={classNames("text-blue-700 hover:text-blue-800", {
                "text-blue-800": product.count >= product.quantity,
              })}
              onClick={handleIncrementCounter}
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
              <button
                className="group transition-all"
                onClick={handleWishlistAction}
              >
                <Wishlist inWishlist={isProductInWishlist} />
              </button>
            )}
            <button onClick={handleDeleteItem}>
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

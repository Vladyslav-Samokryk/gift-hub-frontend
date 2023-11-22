import { CURRENCY } from "@src/app/api/config";
import {
  incrementItem,
  decrementItem,
  removeFromCart,
} from "@src/app/store/cart/cartSlice";
import { Wishlist } from "@src/shared";
import { CountMinus, CountPlus } from "@src/shared/assets/svg/BasketCounter";
import Trash from "@src/shared/assets/svg/Trash";
import { getTotalPrice } from "@src/shared/helpers/price";
import type { BasketItemTypes } from "@src/shared/types/Basket";
import type { SyntheticEvent } from "react";
import { useDispatch } from "react-redux";

const BasketItem = ({
  product,
  options,
  count,
}: BasketItemTypes): JSX.Element => {
  const dispatch = useDispatch();

  const handleIncrementCounter = (id: string): void => {
    dispatch(incrementItem(id));
  };

  const handleDecrementCounter = (id: string): void => {
    dispatch(decrementItem(id));
  };

  const handleDeleteItem = (id: string): void => {
    dispatch(removeFromCart(id));
  };

  const handleAddToWishlist = (e: SyntheticEvent): void => {
    //  TODO: Adiing to wishlist
  };

  return (
    <li>
      <div className="grid h-fit grid-cols-[5fr_1fr_2fr] gap-2">
        <div className="flex h-fit gap-3">
          <img
            src={product.img}
            className="h-28 w-28 shrink-0 rounded-xl border border-black"
            alt={product.name}
          />
          <div className="flex flex-col items-center justify-between">
            <p className="primary">{product.name}</p>
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

        <div className="flex h-6 gap-2">
          <button
            className="text-blue-700 hover:text-blue-800"
            onClick={() => handleDecrementCounter(product.id)}
          >
            <CountMinus />
          </button>
          <span>{count}</span>
          <button
            className="text-blue-700 hover:text-blue-800"
            onClick={() => handleIncrementCounter(product.id)}
          >
            <CountPlus />
          </button>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex justify-end gap-6">
            <button
              className="group transition-all"
              onClick={(e) => handleAddToWishlist(e)}
            >
              <Wishlist />
            </button>
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
                {product.price * count} {CURRENCY}
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

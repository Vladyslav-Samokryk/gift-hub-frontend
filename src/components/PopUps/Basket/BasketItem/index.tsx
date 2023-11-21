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
      <div className="flex h-fit justify-between">
        <div className="flex h-fit gap-3">
          <img
            src={product.img}
            className="h-28 w-28 rounded-xl border border-black"
            alt={product.name}
          />
          <div className="flex flex-col items-center justify-between">
            <p className="primary max-w-[162px]">{product.name}</p>
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
          <button onClick={() => handleDecrementCounter(product.id)}>
            <CountMinus />
          </button>
          <span>{count}</span>
          <button onClick={() => handleIncrementCounter(product.id)}>
            <CountPlus />
          </button>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex gap-6">
            <button
              className="group flex h-9 w-9 items-center justify-center rounded-full transition-all hover:bg-blue-900"
              onClick={(e) => handleAddToWishlist(e)}
            >
              <Wishlist />
            </button>
            <button
              className="group flex h-9 w-9 items-center justify-center rounded-full"
              onClick={() => handleDeleteItem(product.id)}
            >
              <Trash />
            </button>
          </div>
          <div className="flex justify-end gap-4 text-lg font-light">
            <p>{getTotalPrice([product])} ₴</p>
            {product.discount > 0 && (
              <p className="text-blue-200 line-through">
                {product.price * count} ₴
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

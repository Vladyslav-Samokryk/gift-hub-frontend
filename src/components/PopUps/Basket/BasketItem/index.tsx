import { Wishlist } from "@src/shared";
import { CountMinus, CountPlus } from "@src/shared/assets/svg/BasketCounter";
import Trash from "@src/shared/assets/svg/Trash";
import type { BasketItemTypes } from "@src/shared/types/Basket";
import type { FC, SyntheticEvent } from "react";
import { useState } from "react";

const BasketItem: FC<BasketItemTypes> = ({
  img,
  name,
  id,
  price,
  globalRating,
  discount,
  options,
  onUpdateCounter,
  onDelete,
}) => {
  const [counter, setCounter] = useState<number>(1);

  const handleAddToWishlist = (e: SyntheticEvent): void => {
    //  TODO: Adiing to wishlist
  };

  const handleDeleteFromBasket = (): void => {
    console.log("Deleting item with ID:", id);
    onDelete(id);
  };

  return (
    <li>
      <div className="flex h-fit justify-between">
        <div className="flex h-fit gap-3">
          <img
            src={img}
            className="h-[109px] w-[109px] rounded-[10px] border border-black bg-[#D9D9D9]"
            alt={name}
          />
          <div className="flex flex-col items-center justify-between">
            <p className="max-w-[162px] font-rubik text-lg font-medium leading-[1.2]">
              {name}
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
        <div className="flex h-6 gap-2">
          <button
            onClick={() => {
              if (counter === 1) {
                onDelete(id);
              }
              onUpdateCounter(id, counter - 1);
              setCounter((prev) => prev - 1);
            }}
          >
            <CountMinus />
          </button>
          <span contentEditable>{counter}</span>
          <button
            onClick={() => {
              onUpdateCounter(id, counter + 1);
              setCounter((prev) => prev + 1);
            }}
          >
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
              onClick={() => handleDeleteFromBasket()}
            >
              <Trash />
            </button>
          </div>
          <div className="flex justify-end gap-4">
            <span className="text-lg font-light leading-[1.2]">
              {price * (1 - discount) * counter} ₴
            </span>
            {discount > 0 && (
              <span className="leading-[1.2] text-blue-200 line-through">
                {price * counter} ₴
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 h-[1px] w-full bg-blue-200" />
    </li>
  );
};

export default BasketItem;

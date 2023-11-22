import { useModals } from "@src/app/context/modalContext/useModals";
import { useAppSelector } from "@src/app/store";
import { selectCart } from "@src/app/store/cart/cartSlice";
import { UserAccount, Wishlist, Basket } from "@src/shared";
import BasketPopUp from "../PopUps/Basket";
import { useState } from "react";

import { MODALS } from "@src/app/context/modalContext/modals";

const UserSection = (): JSX.Element => {
  const { onOpen } = useModals();
  const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false);
  const cart = useAppSelector(selectCart);
  return (
    <section className="relative flex w-36 justify-between self-center">
      <button
        className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-800"
        onClick={() => onOpen({ name: MODALS.LOGIN })}
      >
        <UserAccount />
      </button>
      <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-800">
        <Wishlist />
      </button>
      <button
        className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-900"
        onClick={() => setIsBasketOpen(!isBasketOpen)}
      >
        <Basket type="sm" className="fill-black group-hover:fill-white" />
      </button>
      {isBasketOpen && (
        <BasketPopUp
          isBasketOpen={isBasketOpen}
          setIsBasketOpen={setIsBasketOpen}
        />
      )}
    </section>
  );
};

export default UserSection;

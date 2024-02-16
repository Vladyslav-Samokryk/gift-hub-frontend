import { useModals } from "app/context/modalContext/useModals";
import { useAppSelector } from "app/store";
import { selectCart } from "app/store/cart/cartSlice";

import { MODALS } from "app/context/modalContext/modals";
import { UserAccount } from "shared/assets/svg/UserAccount";
import { Wishlist } from "shared/assets/svg/Wishlist";
import { Basket } from "shared/assets/svg/Basket";
import { useEffect, useState } from "react";

const UserSection = (): JSX.Element => {
  const { onOpen } = useModals();
  const cart = useAppSelector(selectCart);

  const [count, setCount] = useState(cart.length);

  useEffect(() => {
    setCount(cart.length);
  }, [cart]);

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
        onClick={() => onOpen({ name: MODALS.BASKET })}
      >
        {cart.length > 0 && (
          <div className=" absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-blue-700">
            <span className="text-[10px] text-white">{count}</span>
          </div>
        )}
        <Basket type="sm" className="fill-black group-hover:fill-white" />
      </button>
    </section>
  );
};

export default UserSection;

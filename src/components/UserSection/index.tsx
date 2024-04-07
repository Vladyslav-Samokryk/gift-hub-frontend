import { useModals } from "app/context/modalContext/useModals";
import { useAppSelector } from "app/store";
import { selectCart } from "app/store/cart/cartSlice";
import { MODALS } from "app/context/modalContext/modals";
import { UserAccount } from "shared/assets/svg/UserAccount";
import { Wishlist } from "shared/assets/svg/Wishlist";
import { Basket } from "shared/assets/svg/Basket";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "shared/hooks/useAuth";
import { selectAuthCart, setAuthCount } from "app/store/cart/authCartSlice";
import { useCookies } from "react-cookie";
import { useGetUserBasketQuery } from "app/api/products";
import { useDispatch } from "react-redux";
import type { CartFullItem } from "shared/types/Basket";

const UserSection = (): JSX.Element => {
  const { onOpen } = useModals();
  const cart = useAppSelector(selectCart);
  const authCart = useAppSelector(selectAuthCart);
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [cookies] = useCookies();
  const dispatch = useDispatch();
  const { data } = useGetUserBasketQuery(
    {
      token: cookies.access,
    },
    {
      skip: !isAuth,
    },
  );

  useEffect(() => {
    if (data) dispatch(setAuthCount(data.map((el: CartFullItem) => el.id)));
  }, [data]);

  useEffect(() => {
    setCount(isAuth ? authCart.length : cart.length);
  }, [authCart, cart, isAuth]);

  return (
    <section className="relative flex w-36 justify-between self-center">
      <button
        className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-800"
        onClick={() =>
          !isAuth ? onOpen({ name: MODALS.LOGIN }) : navigate("/user")
        }
      >
        <UserAccount />
      </button>
      <button
        className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-800"
        onClick={() =>
          !isAuth ? onOpen({ name: MODALS.LOGIN }) : navigate("/user/wishlist")
        }
      >
        <Wishlist />
      </button>
      <button
        className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-900"
        onClick={() => onOpen({ name: MODALS.BASKET })}
      >
        {count > 0 && (
          <div className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-blue-700">
            <span className="text-[10px] text-white">
              {count < 100 ? count : "*"}
            </span>
          </div>
        )}
        <Basket type="sm" className="fill-black group-hover:fill-white" />
      </button>
    </section>
  );
};

export default UserSection;

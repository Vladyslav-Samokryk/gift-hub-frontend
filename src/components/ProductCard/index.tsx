/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { CURRENCY } from "app/api/config";
import { addToCart, selectCart } from "app/store/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ImgWithPreloader from "shared/UI/ImgWithPreloader";
import StarRate from "shared/UI/StarRate";
import { Wishlist } from "shared/assets/svg/Wishlist";
import { SCREEN } from "shared/constants/screens";
import { useScreenWidth } from "shared/hooks/useScreenWidth";
import type { ProductCardType } from "shared/types/ProductTypes";
import { Basket } from "shared/assets/svg/Basket";
import { useAuth } from "shared/hooks/useAuth";
import { MODALS } from "app/context/modalContext/modals";
import { useModals } from "app/context/modalContext/useModals";
import { useAppSelector } from "app/store";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { useAddToWishlistMutation } from "app/api/products";
import { useCookies } from "react-cookie";

export default function ProductCard({
  img,
  name,
  category,
  price,
  global_rating,
  id,
}: ProductCardType): JSX.Element {
  const windowWidth = useScreenWidth();
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const { onOpen } = useModals();
  const cart = useAppSelector(selectCart);
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [addToWishlist] = useAddToWishlistMutation();
  const [cookies] = useCookies();

  useEffect(() => {
    setIsProductInCart(cart.some((el) => el.id === id));
  }, [cart]);

  const handleAddToCart = (): void => {
    dispatch(addToCart(id));
    console.log(cookies.access);
  };

  return (
    <div className="m-2 h-card-sm w-card-sm rounded-lg border-2 border-black bg-white lg:h-card lg:w-card">
      <div className="relative">
        <Link to={`/product/${id}`}>
          <ImgWithPreloader
            className="h-cardImg-sm w-full rounded-t-lg lg:h-cardImg"
            img={img}
            name={name}
          />
        </Link>
        <button
          type="button"
          className="group absolute right-2 top-2"
          onClick={() =>
            isAuth
              ? addToWishlist({ id, token: cookies.access })
              : onOpen({
                  name: MODALS.LOGIN,
                  data: { error: true },
                })
          }
        >
          <Wishlist />
        </button>
      </div>
      <hr className="h-hr bg-black" />

      <div className="p-2 lg:relative lg:h-40">
        <Link to={`/product/${id}`}>
          <h2 className="additional lg:primary-bold h-12 w-full overflow-hidden text-ellipsis font-semibold lg:h-20">
            {name}
          </h2>
        </Link>
        <div className="w-[95%] lg:absolute lg:bottom-0">
          <Link to={`/product/${id}`}>
            <h3 className="lg:additional text-[12px] text-gray-900">
              {category}
            </h3>
          </Link>
          <data className="additional lg:primary font-semibold" value={price}>
            {price} {CURRENCY}
          </data>
          <div className="mr-2 flex w-full items-center justify-between">
            <StarRate
              starSize={windowWidth < SCREEN.LG ? 16 : 25}
              rate={global_rating}
            />
            <button onClick={handleAddToCart}>
              <Basket
                type={windowWidth >= SCREEN.LG ? "lg" : "sm"}
                className={classNames("fill-blue-700", {
                  "fill-blue-900": isProductInCart,
                })}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

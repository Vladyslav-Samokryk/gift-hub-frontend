import { CURRENCY } from "app/api/config";
import { addToCart } from "app/store/cart/cartSlice";
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
import { useState } from "react";
import {
  useAddToBasketMutation,
  useAddToWishlistMutation,
  useDeleteFromWishlistMutation,
} from "app/api/products";
import { useCookies } from "react-cookie";
import { incrementBy } from "app/store/cart/authCartSlice";

interface ProductCardProps extends ProductCardType {
  refetch?: () => Promise<void>;
}

export default function ProductCard({
  img,
  name,
  category,
  price,
  global_rating,
  id,
  isInWishlist,
  refetch,
}: ProductCardProps): JSX.Element {
  const windowWidth = useScreenWidth();
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const { onOpen } = useModals();
  const [isProductInWishlist, setIsProductInWishlist] = useState(
    !!isInWishlist,
  );
  const [addToWishlist] = useAddToWishlistMutation();
  const [deleteFromWishlist] = useDeleteFromWishlistMutation();
  const [addToBasket] = useAddToBasketMutation();
  const [cookies] = useCookies();

  const handleAddToCart = (): void => {
    if (isAuth) {
      void addToBasket({
        products: [{ product_id: id, amount: 1 }],
        token: cookies.access,
      });
      dispatch(incrementBy([id]));
    } else dispatch(addToCart(id));
  };

  const handleWishlistAction = (): void => {
    if (isAuth) {
      if (!isProductInWishlist) {
        void addToWishlist({ id, token: cookies.access });
      } else {
        void deleteFromWishlist({ id, token: cookies.access })
          .unwrap()
          .then(async () => {
            if (refetch) {
              await refetch();
            }
          });
      }
    } else {
      onOpen({
        name: MODALS.LOGIN,
        data: { error: true },
      });
    }
    setIsProductInWishlist((prev) => !prev);
  };

  return (
    <div className="m-2 h-card-sm w-card-sm rounded-lg border-2 border-black bg-white xl:h-card xl:min-w-[320px]">
      <div className="relative">
        <Link to={`/product/${id}`}>
          <ImgWithPreloader
            className="h-cardImg-sm w-full rounded-t-lg xl:h-cardImg"
            img={img}
            name={name}
          />
        </Link>
        <button
          type="button"
          className="group absolute right-2 top-2"
          onClick={handleWishlistAction}
        >
          <Wishlist inWishlist={isProductInWishlist} />
        </button>
      </div>
      <hr className="h-hr bg-black" />

      <div className="p-2 xl:relative xl:h-40">
        <Link to={`/product/${id}`}>
          <h2 className="additional xl:primary-bold h-12 w-full overflow-hidden text-ellipsis font-semibold xl:h-20">
            {name}
          </h2>
        </Link>
        <div className="w-[95%] xl:absolute xl:bottom-0">
          <Link to={`/product/${id}`}>
            <h3 className="xl:additional text-[12px] text-gray-900">
              {category}
            </h3>
          </Link>
          <data className="additional xl:primary font-semibold" value={price}>
            {price} {CURRENCY}
          </data>
          <div className="mr-2 flex w-full items-center justify-between">
            <StarRate
              starSize={windowWidth < SCREEN.LG ? 16 : 25}
              rate={global_rating}
            />
            <button onClick={handleAddToCart} className="group">
              <Basket
                type={windowWidth >= SCREEN.XL ? "lg" : "sm"}
                className="fill-blue-700 group-active:fill-blue-900"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

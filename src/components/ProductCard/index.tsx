import {
  StarRate,
  Wishlist,
  Basket,
  type ProductCardType,
  ImgWithPreloader,
  useScreenWidth,
  SCREEN,
} from "@shared";
import { CURRENCY } from "@src/app/api/config";
import { addToCart } from "@src/app/store/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductCard({
  img,
  name,
  category,
  price,
  global_rating,
  discount,
  quantity,
  id,
}: ProductCardType): JSX.Element {
  const windowWidth = useScreenWidth();
  const dispatch = useDispatch();

  const handleAddToCart = (): void => {
    dispatch(
      addToCart({
        img,
        name,
        category,
        price,
        global_rating,
        discount,
        quantity,
        id,
      }),
    );
  };

  return (
    <div className="m-2 h-card-sm w-card-sm rounded-lg border-2 border-black bg-white lg:h-card lg:w-card">
      <div className="relative">
        <Link to={`product/${id}`}>
          <ImgWithPreloader
            className="h-cardImg-sm w-full rounded-t-lg lg:h-cardImg"
            img={img}
            name={name}
          />
        </Link>
        <button className="group absolute right-2 top-2">
          <Wishlist />
        </button>
      </div>
      <hr className="h-hr bg-black" />

      <div className="p-2 lg:relative lg:h-40">
        <Link to={`product/${id}`}>
          <h2 className="additional lg:primary-bold h-12 w-full overflow-hidden text-ellipsis font-semibold lg:h-20">
            {name}
          </h2>
        </Link>
        <div className="w-[95%] lg:absolute lg:bottom-0">
          <Link to={`product/${id}`}>
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
                className="fill-blue-700"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

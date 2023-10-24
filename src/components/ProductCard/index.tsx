import {
  StarRate,
  Wishlist,
  Basket,
  type ProductCardType,
  ImgWithPreloader,
} from "@shared";
import { CURRENCY } from "@config";
import { Link } from "react-router-dom";

export default function ProductCard({
  img,
  name,
  category,
  price,
  global_rating,
  id,
}: ProductCardType): JSX.Element {
  return (
    <div className="m-2 h-card w-card rounded-lg border-2 border-black bg-white">
      <div className="relative">
        <Link to={`product/${id}`}>
          <ImgWithPreloader
            className="h-cardImg w-full rounded-t-lg"
            img={img}
            name={name}
          />
        </Link>
        <button className="group absolute right-2 top-2">
          <Wishlist />
        </button>
      </div>
      <hr className="h-hr bg-black" />

      <div className="relative h-40 p-2">
        <Link to={`product/${id}`}>
          <h2 className="primary-bold">{name}</h2>
        </Link>
        <div className="absolute bottom-0 w-[95%]">
          <Link to={`product/${id}`}>
            <h3 className="additional text-gray-900">{category}</h3>
          </Link>
          <data className="primary" value={price}>
            {price} {CURRENCY}
          </data>
          <div className="mr-2 flex w-full items-center justify-between">
            <StarRate rate={global_rating} />
            <button>
              <Basket type="lg" className="fill-blue-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { StarRate, Wishlist, Basket, type ProductCardType } from "@shared";
import { CURRENCY } from "@config";
import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard ({ img, name, category, price, global_rating }: ProductCardType): JSX.Element {
  const [imgLoad, setImgLoad] = useState(false);
  return (
    <div className="m-2 h-card w-card rounded-lg border-2 border-black bg-white">
      <div className="relative">
        <Link to={"/catalog"}>
          <picture >
            <div className={classNames("h-cardImg w-cardImg rounded-t-lg", { "animate-pulse bg-slate-300": !imgLoad })}>
              <img className={classNames("h-full w-full rounded-t-lg visible", { invisible: !imgLoad })} src={img} alt={name} onLoad={() => setImgLoad(true)}/>
            </div>
          </picture>
        </Link>
        <button className="group absolute right-2 top-2">
          <Wishlist/>
        </button>
      </div>
      <hr className="h-hr bg-black"/>

      <div className="relative h-40 p-2">
        <Link to={"/catalog"}>
          <h2 className="primary-bold">{name}</h2>
        </Link>
        <div className="absolute bottom-0 w-[95%]">
          <Link to={"/catalog"}>
            <h3 className="additional text-gray-900">{category}</h3>
          </Link>
          <data className='primary' value={price}>{price} {CURRENCY}</data>
          <div className="mr-2 flex items-center w-full justify-between">
            <StarRate rate={global_rating}/>
            <button>
              <Basket type="lg" className="fill-blue-700"/>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

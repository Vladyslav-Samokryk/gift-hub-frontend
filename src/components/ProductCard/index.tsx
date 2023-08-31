import { StarRate, Wishlist, Basket, type ProductCardType } from "@shared";
import { CURRENCY } from "@config";
import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard ({ img, name, type, cost, rate }: ProductCardType): JSX.Element {
  const [imgLoad, setImgLoad] = useState(false);
  return (
    <section className="m-1 h-card w-80 rounded-lg border-2 border-black">
      <div className="relative">
        <Link to={"/catalog"}>
          <picture >
            <div className={classNames("h-cardImg w-cardImg rounded-t-lg", { "animate-pulse bg-slate-300": !imgLoad })}>
              <img className={classNames("h-full w-fit rounded-t-lg visible", { invisible: !imgLoad })} src={img} alt={name} onLoad={() => setImgLoad(true)}/>
            </div>
          </picture>
        </Link>
        <button className="group absolute right-2 top-2">
          <Wishlist/>
        </button>
      </div>
      <hr className="h-hr bg-black"/>
      <div className="p-2">
        <Link to={"/catalog"}>
          <h2 className="primary-bold">{name}</h2>
        </Link>
        <Link to={"/catalog"}>
          <h3 className="additional text-gray-900">{type}</h3>
        </Link>
        <data className='primary' value={cost}>{cost} {CURRENCY}</data>
        <div className="mr-2 flex items-center justify-between">
          <StarRate rate={rate}/>
          <button>
            <Basket type="lg" className="fill-blue-700"/>
          </button>
        </div>
      </div>
    </section>
  );
}

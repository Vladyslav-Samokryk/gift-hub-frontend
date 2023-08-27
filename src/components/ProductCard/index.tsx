import { StarRate, Wishlist, Basket } from "@shared";
import { Link } from "react-router-dom";

interface ProductProp {
  img: string;
  name: string;
  type: string;
  cost: number;
  rate: number;
}

const ProductCardExample: ProductProp = {
  img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  name: "Paper name",
  type: "Paper type",
  cost: 1500,
  rate: 1,
};

export default function ProductCard ({ img, name, type, cost, rate }: ProductProp & typeof ProductCardExample): JSX.Element {
  return (
    <div className="m-1 h-[438px] w-80 rounded-lg border-2 border-black">
      <div className="relative">
        <Link to={"/catalog"}>
          <img className="h-[300px] w-80 rounded-lg" src={img} alt={name}/>
        </Link>
        <button className="group absolute right-2 top-2">
          <Wishlist/>
        </button>
      </div>
      <hr className="h-[2px] bg-black"/>
      <div className="p-2">
        <Link to={"/catalog"}>
          <p className="primary-bold">{name}</p>
          <p className="additional text-gray-900">{type}</p>
          <p className='primary'>{cost} ₴</p></Link>
        <div className="mr-2 flex items-center justify-between">
          <StarRate rate={rate}/>
          <button>
            <Basket type="lg" className="fill-blue-700"/>
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.defaultProps = ProductCardExample;

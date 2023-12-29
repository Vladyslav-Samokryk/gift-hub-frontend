import StarRate from "shared/UI/StarRate";
import type { ProductCardType } from "shared/types/ProductTypes";
import ImgWithPreloader from "shared/UI/ImgWithPreloader";
import { CURRENCY } from "app/api/config";
import { Link } from "react-router-dom";

export default function ProductCardLine({
  img,
  name,
  category,
  price,
  global_rating,
  id,
}: ProductCardType): JSX.Element {
  return (
    <div className="m-2 flex h-36 w-full rounded-lg border-2 border-black bg-white sm:w-2/3">
      <Link to={`/product/${id}`} className="h-full w-2/5">
        <ImgWithPreloader
          img={img}
          name={name}
          className="h-full w-full rounded-l-lg "
        />
      </Link>

      <div className="h-full w-[1px] bg-black" />

      <div className="additional relative p-2">
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold">{name}</h2>
          <h3 className="text-[12px] text-gray-900">{category}</h3>
        </Link>
        <StarRate rate={global_rating} />
        <data className="absolute bottom-2 font-semibold" value={price}>
          {price} {CURRENCY}
        </data>
      </div>
    </div>
  );
}

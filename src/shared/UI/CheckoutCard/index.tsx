import { CURRENCY } from "app/api/config";
import type { ProductCardType } from "shared/types/ProductTypes";

function CheckoutCard(product: ProductCardType): JSX.Element {
  return (
    <li className="list-none">
      <div className="mb-3 grid h-fit grid-cols-[5fr_1fr_1fr] gap-2">
        <div className="flex gap-3">
          <img
            src={product.img}
            className="h-28 w-28 shrink-0 rounded-xl border border-black"
            alt={product.name}
          />
          <p className="primary">{product.name}</p>
        </div>

        <p className="text-gray-600">{product?.count}</p>

        <p>
          {product.price} {CURRENCY}
        </p>
      </div>
      <hr />
    </li>
  );
}

export default CheckoutCard;

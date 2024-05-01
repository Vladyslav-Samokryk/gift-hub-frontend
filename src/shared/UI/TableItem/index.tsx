import { CURRENCY } from "app/api/config";
import { useNavigate } from "react-router-dom";

interface TableItemProps {
  name: string;
  img: string;
  quantity: number;
  price: string;
  product: string;
}

export default function TableItem({
  name,
  img,
  quantity,
  price,
  product,
}: TableItemProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div
      className="flex cursor-pointer flex-col p-1 md:flex-row md:py-3 md:pl-5 "
      onClick={() => navigate(`/product/${product}`)}
    >
      <div className="flex gap-2">
        <img className="h-7 w-7 rounded md:h-20 md:w-20" src={img} alt={name} />
        <p className="mobile-font sm:additional md:secondary">{name}</p>
      </div>
      <div className="flex justify-around">
        <p className="text-gray-600">X {quantity}</p>
        <p>
          {price} {CURRENCY}
        </p>
      </div>
    </div>
  );
}

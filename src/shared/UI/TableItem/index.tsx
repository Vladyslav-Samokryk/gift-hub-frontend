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
      className="flex w-full cursor-pointer flex-col py-3 pl-5 md:flex-row"
      onClick={() => navigate(`/product/${product}`)}
    >
      <div className="flex w-full gap-2">
        <img
          className="h-10 w-10 rounded md:h-20 md:w-20"
          src={img}
          alt={name}
        />
        <p className="additional md:secondary">{name}</p>
      </div>
      <div className="flex w-full justify-around">
        <p className="text-gray-600">X {quantity}</p>
        <p>
          {price} {CURRENCY}
        </p>
      </div>
    </div>
  );
}

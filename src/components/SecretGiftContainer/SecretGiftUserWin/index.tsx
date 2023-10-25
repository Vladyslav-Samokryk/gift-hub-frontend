import { useGetRandomProductsQuery } from "@src/app/api/products";
import type { ProductCardType } from "@src/shared";
import { Link } from "react-router-dom";

interface SecretGiftUserWinProps {
  setUserWin: (value: boolean) => void;
  query: ProductCardType | null;
}

export default function SecretGiftUserWin({
  setUserWin,
  query,
}: SecretGiftUserWinProps): JSX.Element {
  const handleClick = (): void => {
    console.log(console.log("Add to cart"));
    setUserWin(false);
  };

  const { data, error } = useGetRandomProductsQuery(query);

  return (
    <section className="mt-10 flex flex-col items-center justify-center">
      <h3 className="h3 mb-5">Воу, ми обрали для тебе щось цікавеньке!</h3>
      <div className="mb-5 h-[60px] w-[600px]">Prise</div>
      <button
        className="btn btn-effect mb-5 mt-16 px-7 py-4 font-rubik text-[16px] leading-6"
        onClick={handleClick}
      >
        Додати в кошик
      </button>
      <Link className="additional text-black underline" to="/shopping-cart">
        Перейти до оформлення замовлення
      </Link>
    </section>
  );
}

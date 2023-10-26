import type { Range } from "@src/app/api/products";
import { useGetRandomProductsQuery } from "@src/app/api/products";
import { Link } from "react-router-dom";

interface SecretGiftUserWinProps {
  setUserWin: (value: boolean) => void;
  query: Range | null;
}

export default function SecretGiftUserWin({
  setUserWin,
  query,
}: SecretGiftUserWinProps): JSX.Element {
  const handleClick = (): void => {
    console.log("Add to cart");
    setUserWin(false);
  };

  const { data, error } = useGetRandomProductsQuery(query);
  return (
    <section className="mt-10 flex max-w-full flex-col items-center justify-center">
      <h3 className="md:h3 bold mb-5 text-center text-[24px] leading-8 ">
        Воу, ми обрали для тебе щось цікавеньке!
      </h3>
      <div className="mb-5 flex h-[240px] w-[240px]  items-center justify-center object-contain object-center md:h-[600px] md:w-[600px]">
        {!data ? (
          <p>Prsent</p>
        ) : (
          <img
            src={data[0].img}
            alt={data[0].name}
            className=" -rotate-6 bg-white shadow-2xl shadow-white/30  md:h-full md:w-full md:max-w-full"
          />
        )}
      </div>
      <button
        className="btn btn-effect mb-5 mt-16 px-7 py-4 font-rubik text-[14px] leading-4"
        onClick={handleClick}
      >
        Додати в кошик
      </button>
      <Link
        className="md:additional text-base text-black underline"
        to="/shopping-cart"
      >
        Перейти до оформлення замовлення
      </Link>
    </section>
  );
}

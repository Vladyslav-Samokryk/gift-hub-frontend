import type { Range } from "@src/app/api/products";
import { useGetRandomProductsQuery } from "@src/app/api/products";
import type { ProductCardType } from "@src/shared";
import { SecretGiftButton } from "@src/shared";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SecretGiftAnimation from "@src/components/SecretGiftContainer/SecretGiftAnimation";

interface SecretGiftUserWinProps {
  setUserWin: (value: boolean) => void;
  query: Range | null;
  isAnimation: boolean;
}

const boxAnimation = {
  initial: { y: -200, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 5 },
};

export default function SecretGiftUserWin({
  setUserWin,
  query,
  isAnimation,
}: SecretGiftUserWinProps): JSX.Element {
  const [present, setPresent] = useState<ProductCardType | null>(null);
  console.log("present", present);
  const handleClick = (): void => {
    console.log("Add to cart");
    setUserWin(false);
  };
  if (!query) return <></>;
  const { data } = useGetRandomProductsQuery(query);

  useEffect(() => {
    if (data?.length) {
      setPresent(data[0]);
    }
  }, [query, data]);

  return (
    <>
      {isAnimation ? (
        <SecretGiftAnimation
          initial={boxAnimation.initial}
          animate={boxAnimation.animate}
          transition={boxAnimation.transition}
        />
      ) : (
        <section className="mt-10 flex max-w-full flex-col items-center justify-center">
          <h3 className="md:h3 text-center text-[24px] leading-8 ">
            Воу, ми обрали для тебе щось цікавеньке!
          </h3>
          <div className="mt-3 flex h-[240px] w-[240px] items-center  justify-center object-contain object-center md:mt-5 md:h-[600px] md:w-[600px]">
            {present && (
              <img
                src={present.img}
                alt={present.name}
                className=" bg-transparent shadow-2xl shadow-white/30  md:h-full md:w-full md:max-w-full"
              />
            )}
          </div>
          <SecretGiftButton
            type="submit"
            className="mb-5 mt-5 px-7 py-4 font-rubik text-[14px] leading-4 md:mt-8"
            onClick={handleClick}
          >
            Додати в кошик
          </SecretGiftButton>
          <Link
            className="md:additional text-base text-black underline"
            to="/shopping-cart"
          >
            Перейти до оформлення замовлення
          </Link>
        </section>
      )}
    </>
  );
}

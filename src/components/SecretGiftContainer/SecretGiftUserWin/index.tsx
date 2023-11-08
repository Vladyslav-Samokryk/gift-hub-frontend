import type { Range } from "@src/app/api/products";
import { useGetRandomProductsQuery } from "@src/app/api/products";
import { SecretGift, type ProductCardType } from "@src/shared";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SecretGiftAnimation from "@src/components/SecretGiftContainer/SecretGiftAnimation";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
          <h3 className="md:h3 h6 text-center">{t("secret_gift.win_title")}</h3>
          <SecretGift />
          <button
            type="submit"
            className="btn btn-effect m-3 w-60 bg-purple-900 py-4"
            onClick={handleClick}
          >
            {t("btn_add_to_basket")}
          </button>
          <Link
            className="md:additional text-base text-black underline"
            to="/shopping-cart"
          >
            {t("btn_make_order")}
          </Link>
        </section>
      )}
    </>
  );
}

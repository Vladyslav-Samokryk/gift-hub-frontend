import type { RangeT } from "app/api/products";
import {
  useAddToBasketMutation,
  useGetRandomProductsQuery,
} from "app/api/products";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SecretGiftAnimation from "components/SecretGiftContainer/SecretGiftAnimation";
import { useTranslation } from "react-i18next";
import { SecretGift } from "shared/assets/svg/SecretGift";
import type { ProductCardType } from "shared/types/ProductTypes";
import { useDispatch } from "react-redux";
import { addSecretToCart } from "app/store/cart/cartSlice";
import { useAuth } from "shared/hooks/useAuth";
import { useCookies } from "react-cookie";
import { incrementBy } from "app/store/cart/authCartSlice";

interface SecretGiftUserWinProps {
  setUserWin: (value: boolean) => void;
  userWin: boolean;
  query: RangeT | null;
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
  userWin,
}: SecretGiftUserWinProps): JSX.Element {
  const [present, setPresent] = useState<ProductCardType | null>(null);
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const [cookies] = useCookies();
  const [addToBasket] = useAddToBasketMutation();

  const handleAddToBasket = (): void => {
    if (present) {
      if (isAuth) {
        void addToBasket({
          products: [
            { product_id: present.id, amount: 1, isSecretPresent: true },
          ],
          token: cookies.access,
        });
        dispatch(incrementBy([present.id]));
      }
      dispatch(addSecretToCart(present.id));
      setUserWin(false);
    }
  };

  const handleNavigation = (): void => {
    if (userWin) {
      handleAddToBasket();
    }
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
            onClick={handleAddToBasket}
          >
            {t("btn_add_to_basket")}
          </button>
          <Link
            className="md:additional text-base text-black underline"
            to="/checkout"
            onClick={handleNavigation}
          >
            {t("btn_make_order")}
          </Link>
        </section>
      )}
    </>
  );
}

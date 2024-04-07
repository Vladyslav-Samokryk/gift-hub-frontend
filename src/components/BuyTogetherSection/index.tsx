import { CURRENCY } from "app/api/config";
import { useTranslation } from "react-i18next";
import {
  useAddToBasketMutation,
  useGetRandomProductsQuery,
} from "app/api/products";
import { Fragment } from "react";
import ProductCardLine from "../ProductCardLine";
import ProductCard from "../ProductCard";
import { Plus } from "shared/assets/svg/Plus";
import { SCREEN } from "shared/constants/screens";
import { useGetCurrentLang } from "shared/hooks/useGetCurrentLang";
import { useScreenWidth } from "shared/hooks/useScreenWidth";
import type { ProductCardType } from "shared/types/ProductTypes";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { addToCart } from "app/store/cart/cartSlice";
import { useAuth } from "shared/hooks/useAuth";
import { incrementBy } from "app/store/cart/authCartSlice";

export default function BuyTogetherSection(): JSX.Element {
  let total = 0;
  const { t } = useTranslation();
  const lang = useGetCurrentLang();
  const { data } = useGetRandomProductsQuery({
    quantity: 3,
    range: {
      from: 0,
      to: 2000,
    },
    lang,
  });
  const windowWidth = useScreenWidth();
  const [addToBasket] = useAddToBasketMutation();
  const dispatch = useDispatch();
  const [cookies] = useCookies();
  const { isAuth } = useAuth();

  const handleAddToBasket = (): void => {
    if (data) {
      if (isAuth) {
        void addToBasket({
          products: data?.map((el) => {
            return { product_id: el.id, amount: 1 };
          }),
          token: cookies.access,
        });
        dispatch(incrementBy(data.length));
      } else {
        data.map((el) => dispatch(addToCart(el.id)));
      }
    }
  };

  return (
    <section className="mb-10">
      <h4 className="primary-bold my-3 text-center lg:text-left">
        {t("buy_together_section")}
      </h4>
      <div className="flex flex-col items-center justify-between lg:flex-row">
        {data?.map((product: ProductCardType, index: number) => {
          total += +product.price;
          return (
            <Fragment key={product.id}>
              {windowWidth >= SCREEN.LG ? (
                <ProductCard {...product} />
              ) : (
                <ProductCardLine {...product} />
              )}
              {index < data.length - 1 ? <Plus /> : null}
            </Fragment>
          );
        })}

        <div className="mt-6">
          <h5 className="primary text-center lg:text-left">
            Total:{" "}
            <span className="lg:h5 primary  font-semibold ">
              {total} {CURRENCY}
            </span>
          </h5>
          <button
            className="btn-effect btn mt-4 p-3 px-10"
            onClick={handleAddToBasket}
          >
            {t("btn_add_to_basket")}
          </button>
        </div>
      </div>
    </section>
  );
}

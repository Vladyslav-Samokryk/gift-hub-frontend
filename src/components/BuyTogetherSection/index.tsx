import { CURRENCY } from "@src/app/config";
import type { ProductCardType } from "@src/shared";
import { Plus, SCREEN, useGetCurrentLang, useScreenWidth } from "@src/shared";
import { useTranslation } from "react-i18next";
import { useGetRandomProductsQuery } from "@src/app/api/products";
import { Fragment } from "react";
import ProductCardLine from "../ProductCardLine";
import ProductCard from "../ProductCard";

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

  return (
    <section>
      <h4 className="primary-bold text-center lg:text-left">
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
          <button className="btn-effect btn mt-4 p-3 px-10">
            {t("btn_add_to_basket")}
          </button>
        </div>
      </div>
    </section>
  );
}

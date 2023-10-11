import { CURRENCY } from "@src/app/config";
import { productCardMock } from "@src/mock";
import type { ProductCardType } from "@src/shared";
import { Plus } from "@src/shared";
import { useTranslation } from "react-i18next";
import { ProductCard } from "..";

export default function BuyTogetherSection(): JSX.Element {
  let total = 0;
  const { t } = useTranslation();

  return (
    <section>
      <h4 className="primary-bold">Buy together</h4>
      <div className="flex items-center justify-between">
        {productCardMock.map((product: ProductCardType, index: number) => {
          total += product.price;
          return (
            <>
              <ProductCard key={product.id} {...product} />
              {index < productCardMock.length - 1 ? <Plus /> : null}
            </>
          );
        })}

        <div>
          <h5 className="primary">
            Total:
            <span className="h5">
              {total} {CURRENCY}
            </span>
          </h5>
          <button className="btn-effect btn">{t("btn_add_to_basket")}</button>
        </div>
      </div>
    </section>
  );
}

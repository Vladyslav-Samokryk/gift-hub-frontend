import { CURRENCY } from "@src/app/config";
import { ProductCard } from "@src/components";
import { productCardMock } from "@src/mock";
import { Checkbox, Plus, type ProductCardType, StarRate } from "@src/shared";
import { useTranslation } from "react-i18next";

function SortCatalog(): JSX.Element {
  const { t } = useTranslation();
  const sorts: TranslationResult = t("sorts", { returnObjects: true });

  return (
    <section className="additional flex h-10 w-full items-center justify-between rounded-md bg-white pl-1 pr-[10%]">
      <p className="text-gray-900">{t("sorts_title")}</p>
      {Object.values(sorts).map((sort, i) => (
        <button key={i}>{sort}</button>
      ))}
    </section>
  );
}

interface TranslationResult {
  title: string;
  sale: string;
  pending: string;
  available: string;
}

function FiltersCatalog(): JSX.Element {
  const { t } = useTranslation();
  const filters: TranslationResult = t("filters", { returnObjects: true });

  return (
    <section className="h-max divide-y-2 rounded-md bg-white px-3 py-2">
      <div>
        <h3>{t("filters_title")}</h3>
        {Object.values(filters).map((filter, i) => (
          <Checkbox key={i} title={filter} />
        ))}
      </div>

      <div>
        <h3>{t("rate")}</h3>
        <div className="flex">
          <Checkbox title="" />
          <StarRate rate={5} />
        </div>

        <div className="flex">
          <Checkbox title="" />
          <StarRate rate={4} />
        </div>
      </div>

      <div>
        <h3>{t("price")}</h3>
        <input type="range" />
      </div>
    </section>
  );
}

function NavigatePath(): JSX.Element {
  return <section>посилання</section>;
}

function BuyTogetherSection(): JSX.Element {
  let total = 0;
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
          <button className="btn-effect btn">Add to basket</button>
        </div>
      </div>
    </section>
  );
}

export default function Catalog(): JSX.Element {
  return (
    <div className="m-auto p-5">
      <NavigatePath />

      <section className="grid grid-cols-[260px_1fr] gap-6">
        <FiltersCatalog />
        <div>
          <SortCatalog />
          <div>
            <div className="mt-3 flex flex-wrap justify-between gap-7">
              {productCardMock.map((product: ProductCardType) => {
                return <ProductCard key={product.id} {...product} />;
              })}
            </div>
            <div>pagination</div>
          </div>
        </div>
      </section>

      <hr />

      <BuyTogetherSection />
    </div>
  );
}

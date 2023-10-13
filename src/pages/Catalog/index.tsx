import {
  BuyTogetherSection,
  FiltersCatalog,
  Breadcrumbs,
  ProductCard,
  SortCatalog,
} from "@src/components";
import { productCardMock } from "@src/mock";
import type { ProductCardType } from "@src/shared";

import { useParams } from "react-router-dom";

export default function Catalog(): JSX.Element {
  const { id } = useParams();

  return (
    <div className="m-auto p-5">
      <Breadcrumbs />

      <section className="grid grid-cols-[230px_1fr] gap-6">
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

import { useGetCategoryIdQuery } from "@src/app/api/categories";
import { useGetProductsByCategoryQuery } from "@src/app/api/products";

import { ProductCard, CatalogLayout } from "@src/components";
import {
  useGetCurrentLang,
  type ProductCardType,
  MAX_PRICE,
  MIN_PRICE,
} from "@src/shared";
import { useState } from "react";

import { useParams } from "react-router-dom";
import type { Filters } from "./context";
import { FilterParamsContext, SortParamsContext } from "./context";

function CatalogByCategory(): JSX.Element {
  const { id } = useParams();
  const lang = useGetCurrentLang();
  const { data: categoryId } = useGetCategoryIdQuery(id ?? "");

  const [filterParams, setFilterParams] = useState<Filters>({
    rate: [],
    main: ["available"],
    priceFrom: MIN_PRICE,
    priceTo: MAX_PRICE,
  });
  const [sortParams, setSortParams] = useState("popular");

  const { data, isLoading, error } = useGetProductsByCategoryQuery(
    {
      categoryId: categoryId ?? "",
      sort: sortParams,
      ...filterParams,
      lang,
    },
    {
      skip: !categoryId ?? false,
    },
  );

  if (error) {
    return <p>NAT</p>;
  }
  return (
    <FilterParamsContext.Provider value={{ filterParams, setFilterParams }}>
      <SortParamsContext.Provider value={{ sortParams, setSortParams }}>
        <CatalogLayout>
          {!isLoading && data ? (
            data.results.map((product: ProductCardType) => {
              return <ProductCard key={product.id} {...product} />;
            })
          ) : (
            <p></p>
          )}
        </CatalogLayout>
      </SortParamsContext.Provider>
    </FilterParamsContext.Provider>
  );
}

export { SortParamsContext, FilterParamsContext, CatalogByCategory };

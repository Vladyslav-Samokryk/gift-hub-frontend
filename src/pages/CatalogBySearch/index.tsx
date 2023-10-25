import {
  productsApi,
  useGetProductsBySearchQuery,
} from "@src/app/api/products";
import { ProductCard } from "@components";
import { useGetCurrentLang, type ProductCardType } from "@src/shared";

import { useParams } from "react-router-dom";
import {
  useFilterContext,
  usePaginationParamsContext,
  useSortContext,
} from "@context/catalogContext";
import { useState, useEffect } from "react";

export default function CatalogBySearch(): JSX.Element {
  const { q } = useParams();
  const { filterParams } = useFilterContext();
  const { sortParams } = useSortContext();
  const lang = useGetCurrentLang();
  const { setCount, page, productNum } = usePaginationParamsContext();

  const { data, isLoading } = useGetProductsBySearchQuery(
    {
      q: q ?? "",
      sort: sortParams,
      ...filterParams,
      lang,
      page,
      productNum,
    },
    {
      skip: !q ?? false,
    },
  );

  useEffect(() => {
    if (data) setCount(data?.count);
  }, [data]);

  return (
    <>
      {!isLoading && data ? (
        data.results.map((product: ProductCardType) => {
          return <ProductCard key={product.id} {...product} />;
        })
      ) : (
        <p></p>
      )}
    </>
  );
}

import {
  productsApi,
  useGetProductsBySearchQuery,
} from "@src/app/api/products";
import { ProductCard } from "@components";
import {
  useGetCurrentLang,
  type ProductCardType,
  PAGINATION_LOAD,
} from "@src/shared";

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
  const { setCount, page, productNum, paginationLoad } =
    usePaginationParamsContext();

  const { data } = useGetProductsBySearchQuery(
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

  const [results, setResults] = useState<ProductCardType[]>();

  useEffect(() => {
    if (data) {
      setCount(data?.count);
      if (paginationLoad === PAGINATION_LOAD.PAGE) {
        setResults(data.results);
      } else {
        setResults((prev) => (prev ? [...prev, ...data.results] : prev));
      }
    }
  }, [data]);

  return (
    <>
      {results ? (
        results.map((product: ProductCardType) => {
          return <ProductCard key={product.id} {...product} />;
        })
      ) : (
        <p></p>
      )}
    </>
  );
}

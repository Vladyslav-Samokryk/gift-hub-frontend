import { useGetProductsBySearchQuery } from "@src/app/api/products";
import { ProductCard } from "@components";
import {
  useGetCurrentLang,
  type ProductCardType,
  PAGINATION_LOAD,
  handleQueryParamArray,
  prepareQueryParam,
} from "@src/shared";

import { usePaginationParamsContext } from "@context/catalogContext";
import { useState, useEffect } from "react";
import { getSearchParams } from "@shared";

export default function CatalogBySearch(): JSX.Element {
  const lang = useGetCurrentLang();
  const { setCount, page, productNum, paginationLoad, trigger } =
    usePaginationParamsContext();
  const searchParams = getSearchParams();

  const { data } = useGetProductsBySearchQuery({
    main: handleQueryParamArray(searchParams.main),
    rate: handleQueryParamArray(searchParams.rate),
    priceFrom: prepareQueryParam(searchParams.priceFrom),
    priceTo: prepareQueryParam(searchParams.priceTo),
    sort: prepareQueryParam(searchParams.sort),
    q: prepareQueryParam(searchParams.q),
    lang,
    page,
    productNum,
  });

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
  }, [data, trigger]);

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

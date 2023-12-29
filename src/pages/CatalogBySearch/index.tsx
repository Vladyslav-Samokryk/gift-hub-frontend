import { useGetProductsBySearchQuery } from "app/api/products";
import { useState, useEffect } from "react";
import { usePaginationParamsContext } from "app/context/catalogContext";
import ProductCard from "components/ProductCard";
import { PAGINATION_LOAD } from "shared/constants/pagination";
import {
  getSearchParams,
  handleQueryParamArray,
  prepareQueryParam,
} from "shared/helpers/url";
import { useGetCurrentLang } from "shared/hooks/useGetCurrentLang";
import type { ProductCardType } from "shared/types/ProductTypes";

export default function CatalogBySearch(): JSX.Element {
  const lang = useGetCurrentLang();
  const paginationContext = usePaginationParamsContext();
  if (!paginationContext) {
    console.error("Pagination context is null");
    return <></>;
  }
  const { setCount, page, productNum, paginationLoad } = paginationContext;
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

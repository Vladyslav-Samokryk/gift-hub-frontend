import { useGetCategoryIdQuery } from "@src/app/api/categories";
import { useGetProductsByCategoryQuery } from "@src/app/api/products";

import { ProductCard } from "@components";
import { usePaginationParamsContext } from "@context/catalogContext";
import {
  useGetCurrentLang,
  type ProductCardType,
  PAGINATION_LOAD,
  getSearchParams,
  prepareQueryParam,
  handleQueryParamArray,
} from "@shared";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CatalogByCategory(): JSX.Element {
  const { id } = useParams();
  const lang = useGetCurrentLang();
  const { data: categoryId } = useGetCategoryIdQuery(id ?? "");
  const paginationContext = usePaginationParamsContext();
  if (!paginationContext) {
    console.error("Pagination context is null");
    return <></>;
  }
  const { setCount, page, productNum, paginationLoad } = paginationContext;
  const searchParams = getSearchParams();
  const { data, error } = useGetProductsByCategoryQuery(
    {
      categoryId: categoryId ?? "",
      main: handleQueryParamArray(searchParams.main),
      rate: handleQueryParamArray(searchParams.rate),
      priceFrom: prepareQueryParam(searchParams.priceFrom),
      priceTo: prepareQueryParam(searchParams.priceTo),
      sort: prepareQueryParam(searchParams.sort),
      lang,
      page,
      productNum,
    },
    {
      skip: !categoryId ?? false,
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

  if (error) {
    return <p></p>;
  }
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

export { CatalogByCategory };

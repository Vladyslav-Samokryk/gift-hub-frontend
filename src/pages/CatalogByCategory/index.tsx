import { useGetCategoryIdQuery } from "@src/app/api/categories";
import { useGetProductsByCategoryQuery } from "@src/app/api/products";

import { ProductCard } from "@components";
import {
  useFilterContext,
  usePaginationParamsContext,
  useSortContext,
} from "@context/catalogContext";
import {
  useGetCurrentLang,
  type ProductCardType,
  PAGINATION_LOAD,
} from "@shared";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CatalogByCategory(): JSX.Element {
  const { id } = useParams();
  const lang = useGetCurrentLang();
  const { data: categoryId } = useGetCategoryIdQuery(id ?? "");
  const { filterParams } = useFilterContext();
  const { sortParams } = useSortContext();
  const { setCount, page, productNum, paginationLoad } =
    usePaginationParamsContext();
  const { data, error } = useGetProductsByCategoryQuery(
    {
      categoryId: categoryId ?? "",
      sort: sortParams,
      ...filterParams,
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

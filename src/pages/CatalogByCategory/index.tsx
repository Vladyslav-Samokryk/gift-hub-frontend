import { useGetCategoryIdQuery } from "@src/app/api/categories";
import { useGetProductsByCategoryQuery } from "@src/app/api/products";

import { ProductCard } from "@components";
import {
  useFilterContext,
  usePaginationParamsContext,
  useSortContext,
} from "@context/catalogContext";
import { useGetCurrentLang, type ProductCardType } from "@shared";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

function CatalogByCategory(): JSX.Element {
  const { id } = useParams();
  const lang = useGetCurrentLang();
  const { data: categoryId } = useGetCategoryIdQuery(id ?? "");
  const { filterParams } = useFilterContext();
  const { sortParams } = useSortContext();
  const { setCount, page, productNum } = usePaginationParamsContext();
  const { data, isLoading, error } = useGetProductsByCategoryQuery(
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

  useEffect(() => {
    if (data) setCount(data?.count);
  }, [data]);

  if (error) {
    return <p></p>;
  }
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

export { CatalogByCategory };

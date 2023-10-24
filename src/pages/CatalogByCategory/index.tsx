import { useGetCategoryIdQuery } from "@src/app/api/categories";
import { useGetProductsByCategoryQuery } from "@src/app/api/products";

import { ProductCard } from "@src/components";
import {
  useFilterContext,
  useSortContext,
} from "@src/components/CatalogLayout/context";
import { useGetCurrentLang, type ProductCardType } from "@src/shared";

import { useParams } from "react-router-dom";

function CatalogByCategory(): JSX.Element {
  const { id } = useParams();
  const lang = useGetCurrentLang();
  const { data: categoryId } = useGetCategoryIdQuery(id ?? "");
  const { filterParams } = useFilterContext();
  const { sortParams } = useSortContext();
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

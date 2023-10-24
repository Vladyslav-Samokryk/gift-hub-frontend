import { useGetProductsBySearchQuery } from "@src/app/api/products";
import { ProductCard } from "@src/components";
import { useGetCurrentLang, type ProductCardType } from "@src/shared";

import { useParams } from "react-router-dom";
import {
  useFilterContext,
  useSortContext,
} from "../../components/CatalogLayout/context";

export default function CatalogByCategory(): JSX.Element {
  const { q } = useParams();
  const { filterParams } = useFilterContext();
  const { sortParams } = useSortContext();

  const lang = useGetCurrentLang();
  const { data, isLoading } = useGetProductsBySearchQuery(
    { q: q ?? "", sort: sortParams, ...filterParams, lang },
    {
      skip: !q ?? false,
    },
  );
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

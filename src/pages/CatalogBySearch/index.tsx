import { useGetProductsBySearchQuery } from "@src/app/api/products";
import { ProductCard, CatalogLayout } from "@src/components";
import { useGetCurrentLang, type ProductCardType } from "@src/shared";

import { useParams } from "react-router-dom";

export default function CatalogByCategory(): JSX.Element {
  const { q } = useParams();

  const lang = useGetCurrentLang();
  const { data, isLoading } = useGetProductsBySearchQuery(
    { q: q ?? "", lang },
    {
      skip: !q ?? false,
    },
  );
  return (
    <CatalogLayout>
      {!isLoading && data ? (
        data.results.map((product: ProductCardType) => {
          return <ProductCard key={product.id} {...product} />;
        })
      ) : (
        <p></p>
      )}
    </CatalogLayout>
  );
}

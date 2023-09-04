import { useGetNewProductsQuery, useGetPopularProductsQuery } from "@src/app/api/products";
import { ProductCard } from "@components";
import { SeeMoreButton, useTypedTranslation, type ProductSectionUnion, type ProductCardType } from "@shared";

export default function ProductSection ({ section }: { section: ProductSectionUnion; }): JSX.Element {
  const t = useTypedTranslation();
  const { data, isLoading, error } = section === "new" ? useGetNewProductsQuery("") : useGetPopularProductsQuery("");
  if (isLoading || !data || error) return <p>Loading...</p>;

  return (
    <section className="my-20 w-full">
      <h5 className="h5 text-center">{section === "new" ? t("newProductSection") : t("popularProductSection")}</h5>
      <div className="my-12 flex overflow-x-auto overflow-y-hidden px-10 before:m-auto after:m-auto">
        {data.results.map((product: ProductCardType) => {
          return <ProductCard key={product.id} {...product}/>;
        })}
      </div>
      <SeeMoreButton/>
    </section>
  );
}

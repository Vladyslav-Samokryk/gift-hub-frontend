import { useGetNewProductsQuery, useGetPopularProductsQuery } from "@src/app/api/products";
import { ProductCard } from "@components";
import { SeeMoreButton, useTypedTranslation, type ProductCardType } from "@shared";

type ProductSectionUnion = "new" | "popular";

export default function ProductSection ({ section }: { section: ProductSectionUnion; }): JSX.Element {
  const t = useTypedTranslation();
  const { data, isLoading, error } = section === "new" ? useGetNewProductsQuery("") : useGetPopularProductsQuery("");
  if (isLoading || !data || error) return <p>Loading...</p>;

  return (
    <section className="my-20 w-full">
      <h5 className="h5 text-center">{section === "new" ? t("newProductSection") : t("popularProductSection")}</h5>
      <div className="my-10 flex overflow-x-auto overflow-y-hidden px-2 before:m-auto after:m-auto" style={{ scrollbarWidth: "none" }}>
        {data.results.map((product: ProductCardType) => {
          return <ProductCard key={product.id} {...product}/>;
        })}
      </div>
      <SeeMoreButton/>
    </section>
  );
}

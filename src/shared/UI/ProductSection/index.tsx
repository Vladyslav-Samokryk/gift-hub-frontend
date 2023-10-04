import { useGetNewProductsQuery, useGetPopularProductsQuery } from "@src/app/api/products";
import { ProductCard } from "@components";
import { SeeMoreButton, useTypedTranslation, type ProductCardType, useHorizontalScroll } from "@shared";

type ProductSectionUnion = "new" | "popular";

export default function ProductSection ({ section }: { section: ProductSectionUnion; }): JSX.Element {
  const t = useTypedTranslation();
  const { data, isLoading, error } = section === "new" ? useGetNewProductsQuery("") : useGetPopularProductsQuery("");
  const scrollRef = useHorizontalScroll();

  if (isLoading || !data || error) return <></>;

  return (
    <section className="my-20 w-full">
      <h5 className="h5 text-center">{section === "new" ? t("newProductSection") : t("popularProductSection")}</h5>
      <div className="no-scrollbar my-10 flex overflow-scroll px-2 before:m-auto after:m-auto" ref={scrollRef} style={{ scrollbarWidth: "none" }}>
        {data.results.map((product: ProductCardType) => {
          return <ProductCard key={product.id} {...product}/>;
        })}
      </div>
      <SeeMoreButton/>
    </section>
  );
}

import {
  useGetNewProductsQuery,
  useGetPopularProductsQuery,
} from "@src/app/api/products";
import { ProductCard } from "@components";
import {
  SeeMoreButton,
  type ProductCardType,
  useHorizontalScroll,
  useGetCurrentLang,
} from "@shared";
import { useTranslation } from "react-i18next";

type ProductSectionUnion = "new" | "popular";

export default function ProductSection({
  section,
}: {
  section: ProductSectionUnion;
}): JSX.Element {
  const { t } = useTranslation();
  const lang = useGetCurrentLang();
  const { data, isLoading, error } =
    section === "new"
      ? useGetNewProductsQuery(lang)
      : useGetPopularProductsQuery(lang);
  const scrollRef = useHorizontalScroll();

  if (isLoading || !data || error) return <></>;

  return (
    <section className="my-20 w-full">
      <h5 className="h5 text-center">
        {section === "new"
          ? t("product_sections.new")
          : t("product_sections.popular")}
      </h5>
      <div
        className="no-scrollbar my-10 flex overflow-scroll px-2 before:m-auto after:m-auto"
        ref={scrollRef}
        style={{ scrollbarWidth: "none" }}
      >
        {data.results.map((product: ProductCardType) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
      <SeeMoreButton />
    </section>
  );
}

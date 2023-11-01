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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
      <SeeMoreButton
        onClick={() => {
          navigate(
            section === "new"
              ? "/search/?sort=new"
              : "/search/?rate=4&rate=5&sort=popular",
          );
          window.scrollTo(0, 0);
        }}
      />
    </section>
  );
}

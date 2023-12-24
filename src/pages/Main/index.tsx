import { BannerSlider, TrickedLine, RandomPresentSection } from "@components";
import { ProductSection, useGetCurrentLang } from "@shared";
import {
  useGetPopularProductsQuery,
  useGetNewProductsQuery,
} from "@src/app/api/products";
import { useTranslation } from "react-i18next";

export default function Main(): JSX.Element {
  const lang = useGetCurrentLang();

  const { data: popular } = useGetPopularProductsQuery(lang);
  const { data: newProducts } = useGetNewProductsQuery(lang);
  const { t } = useTranslation();

  return (
    <>
      <BannerSlider />
      <ProductSection
        linkPath="/search/?rate=4&rate=5&sort=popular"
        products={popular?.results}
        title={t("product_sections.popular")}
      />
      <TrickedLine />
      <ProductSection
        linkPath="/search/?sort=new"
        products={newProducts?.results}
        title={t("product_sections.new")}
      />
      <RandomPresentSection />
    </>
  );
}

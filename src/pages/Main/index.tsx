import {
  useGetPopularProductsQuery,
  useGetNewProductsQuery,
} from "app/api/products";
import { useTranslation } from "react-i18next";
import BannerSlider from "components/BannerSlider";
import RandomPresentSection from "components/RandomPresent";
import TrickedLine from "components/TrickedLine";
import ProductSection from "shared/UI/ProductSection";
import { useGetCurrentLang } from "shared/hooks/useGetCurrentLang";

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

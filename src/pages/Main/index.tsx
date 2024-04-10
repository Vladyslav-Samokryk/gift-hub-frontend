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
import { useCookies } from "react-cookie";

export default function Main(): JSX.Element {
  const lang = useGetCurrentLang();
  const [cookies] = useCookies();

  const { data: popular } = useGetPopularProductsQuery({
    lang,
    token: cookies.access,
  });
  const { data: newProducts } = useGetNewProductsQuery({
    lang,
    token: cookies.access,
  });
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

import { BannerSlider, TrickedLine, RandomPresentSection } from "@components";
import { ProductSection } from "@shared";

export default function Main(): JSX.Element {
  return (
    <>
      <BannerSlider />
      <ProductSection section={"popular"} />
      <TrickedLine />
      <ProductSection section={"new"} />
      <RandomPresentSection />
    </>
  );
}

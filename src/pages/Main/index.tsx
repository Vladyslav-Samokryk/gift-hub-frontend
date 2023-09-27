import { BannerSlider, TrickedLine, RandomPresentSection } from "@components";
import { ProductSection, useTypedTranslation } from "@shared";
import { useAppSelector } from "@store";

export default function Main (): JSX.Element {
  const user = useAppSelector((state) => state.user);
  const t = useTypedTranslation();
  const { isAuth } = user;
  
  console.log(t("categories"), { returnObject: true });

  return (
    <div>
      <BannerSlider/>
      <ProductSection section={"popular"}/>
      <TrickedLine/>
      <ProductSection section={"new"}/>
      <RandomPresentSection/>
    </div>
  );
}

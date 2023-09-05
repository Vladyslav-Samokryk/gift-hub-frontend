import { BannerSlider, TrickedLine } from "@components";
import { ProductSection } from "@shared";
import { useAppSelector } from "@store";

export default function Main (): JSX.Element {
  const user = useAppSelector((state) => state.user);
  const { isAuth } = user;

  return (
    <div>
      <BannerSlider/>
      <ProductSection section={"popular"}/>
      <TrickedLine/>
      <ProductSection section={"new"}/>
    </div>
  );
}

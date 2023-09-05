import { BannerSlider, TrickedLine, RandomPresent } from "@components";
import { useAppSelector } from "@store";

export default function Main (): JSX.Element {
  const user = useAppSelector((state) => state.user);

  const { isAuth } = user;

  return (
    <>
      <RandomPresent/>
    </>
  );
}

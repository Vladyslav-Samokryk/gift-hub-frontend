import { SeeMoreButton } from "@src/shared";
import { useAppSelector } from "@store";

export default function Main (): JSX.Element {
  const user = useAppSelector((state) => state.user);

  const { isAuth } = user;
  return (
    <div>
      <h2>Main</h2>
      <SeeMoreButton/>
    </div>
  );
}

import { useAppSelector } from "@src/app/store";

export default function Main (): JSX.Element {
  const user = useAppSelector((state) => state.user);

  const { isAuth } = user;
  console.log({
    isAuth,
  });

  return (
    <div>
      <h2>Main</h2>
    </div>
  );
}

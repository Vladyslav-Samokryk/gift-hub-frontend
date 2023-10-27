import type { ProductCardType } from "@src/shared";
import { useState } from "react";
import SecretGiftForm from "./SecretGiftForm";
import SecretGiftUserWin from "./SecretGiftUserWin";
import SecretGiftAnimation from "./SecrtGiftAnimation";

export default function SecretGiftContainer(): JSX.Element {
  const [userWin, setUserWin] = useState(false);
  const [query, setQuery] = useState<any | null>(null);
  const [isAnimation, setIsAnimation] = useState(false);

  console.log("isAnimation", isAnimation);

  return !userWin ? (
    <SecretGiftForm
      setUserWin={setUserWin}
      setQuery={setQuery}
      setIsAnimation={setIsAnimation}
    />
  ) : isAnimation ? (
    <SecretGiftAnimation />
  ) : (
    <SecretGiftUserWin setUserWin={setUserWin} query={query} />
  );
}

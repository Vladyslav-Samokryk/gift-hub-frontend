import type { ProductCardType } from "@src/shared";
import { useState } from "react";
import SecretGiftForm from "./SecretGiftForm";
import SecretGiftUserWin from "./SecretGiftUserWin";

export default function SecretGiftContainer(): JSX.Element {
  const [userWin, setUserWin] = useState(false);
  const [query, setQuery] = useState<any | null>(null);

  return !userWin ? (
    <SecretGiftForm setUserWin={setUserWin} setQuery={setQuery} />
  ) : (
    <SecretGiftUserWin setUserWin={setUserWin} query={query} />
  );
}

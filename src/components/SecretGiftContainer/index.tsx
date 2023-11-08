import { useState } from "react";
import SecretGiftForm from "./SecretGiftForm";
import SecretGiftUserWin from "./SecretGiftUserWin";
import type { Range } from "@src/app/api/products";

export default function SecretGiftContainer(): JSX.Element {
  const [userWin, setUserWin] = useState(false);
  const [query, setQuery] = useState<Range | null>(null);
  const [isAnimation, setIsAnimation] = useState(false);

  return !userWin ? (
    <SecretGiftForm
      setUserWin={setUserWin}
      setQuery={setQuery}
      setIsAnimation={setIsAnimation}
    />
  ) : (
    <SecretGiftUserWin
      setUserWin={setUserWin}
      query={query}
      isAnimation={isAnimation}
    />
  );
}

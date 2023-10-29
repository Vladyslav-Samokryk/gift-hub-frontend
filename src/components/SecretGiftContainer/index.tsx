import { useState } from "react";
import SecretGiftForm from "./SecretGiftForm";
import SecretGiftUserWin from "./SecretGiftUserWin";
import SecretGiftAnimation from "./SecrtGiftAnimation";
import { getRandomNumber } from "../RandomPresent/RandomWheel/helpers";
import type { Range } from "@src/app/api/products";

export default function SecretGiftContainer(): JSX.Element {
  const [userWin, setUserWin] = useState(false);
  const [query, setQuery] = useState<Range | null>(null);
  const [isAnimation, setIsAnimation] = useState(false);
  const time = getRandomNumber();
  const boxAnimation = {
    initial: { y: -200, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: time / 1000 },
  };
  return !userWin ? (
    <SecretGiftForm
      setUserWin={setUserWin}
      setQuery={setQuery}
      setIsAnimation={setIsAnimation}
      time={time}
    />
  ) : isAnimation ? (
    <SecretGiftAnimation
      initial={boxAnimation.initial}
      animate={boxAnimation.animate}
      transition={boxAnimation.transition}
    />
  ) : (
    <SecretGiftUserWin setUserWin={setUserWin} query={query} />
  );
}

import type { ProductCardType } from "@src/shared";
import { useState } from "react";
import RandomWheel from "./RandomWheel";
import WinSection from "./WinSection";

export default function RandomPresentSection (): JSX.Element {
  const [userWin, setUserWin] = useState(false);
  const [wheelRotate, setWheelRotate] = useState(false);
  const [present, setPresent] = useState<ProductCardType | null>(null);

  return !userWin
    ? <RandomWheel setUserWin={setUserWin} setWheelRotate={setWheelRotate} wheelRotate={wheelRotate} setPresent={setPresent}/>
    : <WinSection setUserWin={setUserWin} setWheelRotate={setWheelRotate} setPresent={setPresent} present={present}/>;
}

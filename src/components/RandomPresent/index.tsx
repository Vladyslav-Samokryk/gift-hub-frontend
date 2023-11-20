import type { ProductCardType } from "@src/shared";
import { useState } from "react";
import RandomWheel from "./RandomWheel";
import WinSection from "./WinSection";

export default function RandomPresentSection(): JSX.Element {
  const [userWin, setUserWin] = useState(false);
  const [wheelRotate, setWheelRotate] = useState(false);
  const [present, setPresent] = useState<ProductCardType | null>(null);
  const [range, setRange] = useState({
    from: 200,
    to: 700,
  });

  return !userWin ? (
    <RandomWheel
      setUserWin={setUserWin}
      setWheelRotate={setWheelRotate}
      wheelRotate={wheelRotate}
      setPresent={setPresent}
      range={range}
      setRange={setRange}
    />
  ) : (
    <WinSection
      setUserWin={setUserWin}
      setWheelRotate={setWheelRotate}
      setPresent={setPresent}
      present={present}
    />
  );
}

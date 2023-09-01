import { useTypedTranslation, useInterval } from "@shared";
import { useLayoutEffect, useState } from "react";
import { START_OFFSET, END_OFFSET, MAX_OFFSET, MIN_OFFSET, STEP } from "./constants";

export default function TrickedLine (): JSX.Element {
  const [path1, setPath1] = useState(START_OFFSET);
  const [path2, setPath2] = useState(END_OFFSET);
  const [widthStep, setWidthStep] = useState(0);

  useLayoutEffect(() => {
    setWidthStep(window.innerWidth / 4);
  });

  const t = useTypedTranslation();

  function getOffset (path: number): number {
    return path >= MAX_OFFSET ? MIN_OFFSET : path + STEP;
  }

  useInterval(() => {
    setPath1(getOffset(path1));
    setPath2(getOffset(path2));
  }, 10);

  return (
    <svg width="100%" height="224">
      <defs>
        <linearGradient id="grad1" x1="0.12%" x2="99.92%">
          <stop offset="0%" style={{ stopColor: "#303F9F" }}/>
          <stop offset="100%" style={{ stopColor: "#9747FF" }} />
        </linearGradient>
      </defs>
      <path id="curve" strokeLinecap="square" className="stroke-[url(#grad1)]" fill="transparent" strokeWidth="78px" d={`M 6 97 Q ${widthStep} 25 ${widthStep * 2} 110 Q ${widthStep * 3} 212.7 ${widthStep * 4} 110`}/>
      <text width="100%" style={{ transform: "translate3d(0,0,0)" }}>
        <textPath className="font-exo2 text-base font-semibold" xlinkHref="#curve" startOffset={path1} fill="#fff">{t("aboutSecterPresent")} • {t("aboutSecterPresent")} • {t("aboutSecterPresent")} • {t("aboutSecterPresent")} •
        </textPath>
        <textPath className="font-exo2 text-base font-semibold" xlinkHref="#curve" startOffset={path2} fill="#fff"> • {t("aboutSecterPresent")} • {t("aboutSecterPresent")} • {t("aboutSecterPresent")} • {t("aboutSecterPresent")} •
        </textPath>
      </text>
    </svg>
  );
}

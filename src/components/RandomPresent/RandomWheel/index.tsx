import type { Dispatch, SetStateAction } from "react";
import { useEffect, useRef, useState } from "react";
import { useGetRandomProductsQuery } from "app/api/products";
import {
  getLeft,
  getSize,
  getDirection,
  getStyle,
  getPresent,
  getRandomNumber,
} from "components/RandomPresent/RandomWheel/helpers";

import { useTranslation } from "react-i18next";
import type { StylePropType } from "shared/types/Styles";
import type { ProductCardType } from "shared/types/ProductTypes";
import type { TRRandomPresent } from "shared/types/Translation";
import RandomStep from "shared/UI/RandomStep";
import RangePriceRandom from "shared/UI/Range/RangePriceRandom";
import { LeftStep, DownStep } from "shared/assets/svg/Arrows";
import { DIRECTION } from "shared/constants/direction";
import { SCREEN } from "shared/constants/screens";
import { useGetCurrentLang } from "shared/hooks/useGetCurrentLang";
import { useInterval } from "shared/hooks/useInterval";
import { useScreenWidth } from "shared/hooks/useScreenWidth";
import type { Range } from "shared/types/Range";

interface RandomWheelProps {
  setUserWin: (value: boolean) => void;
  setWheelRotate: (value: boolean) => void;
  wheelRotate: boolean;
  setPresent: (value: ProductCardType | null) => void;
  range: Range;
  setRange: Dispatch<SetStateAction<Range>>;
}

export default function RandomWheel({
  setUserWin,
  setWheelRotate,
  wheelRotate,
  setPresent,
  range,
  setRange,
}: RandomWheelProps): JSX.Element {
  const { t } = useTranslation();

  const randomPresent: TRRandomPresent = t("random_present", {
    returnObjects: true,
  });

  const windowWidth = useScreenWidth();
  const lang = useGetCurrentLang();
  const { data, error } = useGetRandomProductsQuery(
    { range, lang },
    {
      skip: !wheelRotate,
    },
  );

  const [style, setStyle] = useState<StylePropType[]>([
    { left: -5, size: 21, direction: DIRECTION.FORWARD },
    { left: 10, size: 23, direction: DIRECTION.FORWARD },
    { left: 27, size: 27, direction: DIRECTION.FORWARD },
    { left: 48, size: 23, direction: DIRECTION.FORWARD },
    { left: 65, size: 21, direction: DIRECTION.BACK },
  ]);
  const styleRef = useRef(style);

  useEffect(() => {
    styleRef.current = style;
  }, [style]);

  useInterval(() => {
    if (wheelRotate) {
      setStyle((prevStyle) =>
        prevStyle.map((el) => ({
          left: getLeft(el),
          size: getSize(el),
          direction: getDirection(el),
        })),
      );
    }
  }, 1);

  useEffect(() => {
    if (wheelRotate && data) {
      setTimeout(() => {
        setWheelRotate(false);
        setPresent(data[getPresent(styleRef.current)]);
        setUserWin(true);
      }, getRandomNumber());
    }
  }, [wheelRotate, data]);

  return (
    <section className="relative m-auto mb-10 w-[85vw] rounded-2xl bg-purple-100 p-5 md:p-10">
      <h2 className="primary md:h4 mb-5">{randomPresent.headers[0]}</h2>
      <h2 className="primary-bold md:h2 mb-5 bg-primary-linear bg-clip-text text-right text-transparent">
        {randomPresent.headers[1]}
      </h2>
      <div></div>
      <div className="flex flex-col items-center justify-around md:flex-row ">
        {randomPresent.steps.map((step: string, index: number) => {
          const stepIcon =
            windowWidth >= SCREEN.MD ? <LeftStep /> : <DownStep />;
          return (
            <>
              <div
                key={index}
                className="flex flex-col items-center justify-center md:flex-row"
              >
                <RandomStep index={index + 1} step={step} />
                {index === 0 && windowWidth < SCREEN.MD && (
                  <RangePriceRandom
                    permission={wheelRotate}
                    setRange={setRange}
                    {...range}
                  />
                )}
              </div>
              {index < randomPresent.steps.length - 1 && stepIcon}
            </>
          );
        })}
      </div>
      <div className="my-3 flex flex-col items-center justify-center">
        {windowWidth >= SCREEN.MD && (
          <RangePriceRandom
            permission={wheelRotate}
            setRange={setRange}
            {...range}
          />
        )}
        <button
          onClick={() => setWheelRotate(true)}
          className="secondary-bold mb-5 h-12 w-max rounded-md bg-blue-700 px-8 text-white md:w-96"
        >
          {randomPresent.btn_get_present}
        </button>
      </div>

      {data && !error && (
        <div
          className={
            "no-scrollbar relative -left-10 mx-5 flex h-[60vw] w-[96vw] items-center overflow-x-hidden whitespace-nowrap md:-left-16 md:h-[27vw]"
          }
        >
          {data.map((el, i) => {
            return (
              <img
                key={i}
                src={el.img}
                className="absolute bg-white object-contain shadow-randomize-result"
                style={getStyle(style[i], windowWidth)}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

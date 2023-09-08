import { LeftStep, useInterval, RangePrice, type StylePropType, useScreenWidth, type ProductCardType } from "@shared";
import { useEffect, useState } from "react";
import { useGetRandomProductsQuery } from "@src/app/api/products";
import { getLeft, getSize, getDirection, getStyle } from "./helpers";
import classNames from "classnames";
import { RandomStep, DownStep } from "@shared";
import { useTranslation } from "react-i18next";

interface TranslationResult {
  headers: string[];
  steps: string[];
}

export default function RandomPresent (): JSX.Element {
  const [range, setRange] = useState({
    from: 200,
    to: 700,
  });
  const { t } = useTranslation();
  const [random, setRandom] = useState(false);
  const windowWidth = useScreenWidth();
  const sectionText: TranslationResult = t("randomPresent", { returnObjects: true });

  const { data, error } = useGetRandomProductsQuery(range, {
    skip: !random,
  });

  const [style, setStyle] = useState<StylePropType[]>([
    { left: 5, size: 21, direction: "forward" },
    { left: 20, size: 23, direction: "forward" },
    { left: 37, size: 27, direction: "forward" },
    { left: 58, size: 23, direction: "forward" },
    { left: 75, size: 21, direction: "back" },
  ]);

  useInterval(() => {
    if (random) {
      setStyle((prevStyle) => prevStyle.map((el) => ({
        left: getLeft(el),
        size: getSize(el),
        direction: getDirection(el),
      })));
    }
  }, 1);

  useEffect(() => {
    if (random) {
      setTimeout(() => setRandom(false), 10000);
    }
  }, [random]);

  return (
    <section className='relative m-3 rounded-2xl bg-purple-100 px-5 py-10'>
      <h2 className='primary md:h4 mb-5'>{sectionText.headers[0]}</h2>
      <h2 className='primary-bold md:h2 mb-5 bg-gradient-primary-linear bg-clip-text text-right text-transparent'>{sectionText.headers[1]}</h2>
      <div>

      </div>
      <div className='flex flex-col items-center justify-around md:flex-row '>
        {sectionText.steps.map((step: string, index: number) => {
          const stepIcon = windowWidth >= 768 ? <LeftStep/> : <DownStep/>;
          return <div key={index} className='flex flex-col items-center justify-center md:flex-row'>
            <RandomStep index={index + 1} step={step}/>
            {index === 0 && windowWidth < 768 && <RangePrice permission={random} setRange={setRange} {...range} />}
            {index < sectionText.steps.length - 1 && stepIcon }
          </div>;
        })}
      </div>
      <div className='my-3 flex flex-col items-center justify-center'>
        {windowWidth >= 768 && <RangePrice permission={random} setRange={setRange} {...range}/>
        }
        <button onClick={() => setRandom(true)} className='secondary-bold mb-5 h-12 w-max rounded-md bg-blue-700 px-8 text-white lg:w-96'>{t("getRandomPresent")}</button>
      </div>

      {(data && !error) && <div className={classNames("no-scrolling relative -left-10 md:-left-16 w-[96vw] mx-5 flex h-[60vw] items-center overflow-x-hidden whitespace-nowrap md:h-[27vw]", {
        "blur-sm": !random,
      })}>
        { data.map((el, i) => {
          return <img key={i} src={el.img} className="absolute bg-white object-contain shadow-randomize-result" style={getStyle(style[i], windowWidth)}/>;
        })}
      </div>}
    </section>
  );
}

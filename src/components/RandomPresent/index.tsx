import { LeftStep, useTypedTranslation, useInterval, RangePrice, type StylePropType, useScreenWidth } from "@shared";
import { useEffect, useState } from "react";
import { useGetRandomProductsQuery } from "@src/app/api/products";
import { getLeft, getSize, getDirection, getStyle, getPresent } from "./helpers";
import { useAppDispatch, useAppSelector } from "@src/app/store";
import { setPermition } from "@src/app/store/slices/randomRange";

export default function RandomPresent (): JSX.Element {
  const randomRange = useAppSelector((state) => state.randomRange);
  const { from, to } = randomRange;
  const { data, isLoading, error } = useGetRandomProductsQuery({ from, to });
  const t = useTypedTranslation();
  const [random, setRandom] = useState(false);
  const [r, setR] = useState(false);
  const windowWidth = useScreenWidth();
  const dispatch = useAppDispatch();

  const [style, setStyle] = useState<StylePropType[]>([
    { left: 5, size: 21, direction: "forward" },
    { left: 20, size: 23, direction: "forward" },
    { left: 37, size: 27, direction: "forward" },
    { left: 58, size: 23, direction: "forward" },
    { left: 75, size: 21, direction: "back" },
  ]);

  useInterval(() => {
    if (random) {
      setStyle(style.map((el) => ({
        left: getLeft(el),
        size: getSize(el),
        direction: getDirection(el),
      })));
    }
  }, 1);

  useEffect(() => {
    if (random) {
      setTimeout(() => { setRandom(false); setR(true); dispatch(setPermition({ permition: true })); }, 10000);
    }
  }, [random]);

  if (isLoading || !data || error) return <p>Loading...</p>;

  return (
    <section className='m-3 rounded-2xl bg-purple-100 px-5 py-10'>
      <h2 className='primary md:h4 mb-5'>{t("randomPresent_header1")}</h2>
      <h2 className='primary-bold md:h2 mb-5 bg-gradient-primary-linear bg-clip-text text-right text-transparent'>{t("randomPresent_header2")}</h2>
      <div className='flex flex-col items-center justify-around md:flex-row '>
        <div className='flex w-full items-center justify-center'><span className='mr-2 text-[40px] text-purple-900 lg:text-[70px]'>1</span><p className='secondary lg:h6 w-full md:w-[23vw]'>{t("randomPresent_step1")}</p> </div> <LeftStep/>
        <div className='flex w-full items-center justify-center'><span className='mr-2 text-[40px] text-purple-900 lg:text-[70px]'>2</span><p className='secondary lg:h6 md:w-[23vw]'>{t("randomPresent_step2")}</p> </div> <LeftStep/>
        <div className='flex w-full items-center justify-center'><span className='mr-2 text-[40px] text-purple-900 lg:text-[70px]'>3</span><p className='secondary lg:h6 w-full md:w-[23vw]'>{t("randomPresent_step3")}</p> </div>
      </div>
      <div className='my-3 flex flex-col items-center justify-center'>
        <RangePrice/>
        <button onClick={() => { setRandom(true); setR(false); dispatch(setPermition({ permition: false })); }} className='secondary-bold my-10 h-12 w-max rounded-md bg-blue-700 px-8 text-white lg:w-96'>{t("getRandomPresent")}</button>
      </div>

      <div className='no-scrolling relative -left-[12vw] w-[96vw] mx-5 flex h-[60vw] items-center overflow-x-hidden whitespace-nowrap md:h-[27vw] '>
        {data.map((el, i) => {
          return <img key={i} src={el.img} className="absolute bg-white object-contain shadow-randomize-result" style={getStyle(style[i], windowWidth)}/>;
        })}
      </div>
    </section>
  );
}

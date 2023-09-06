import { LeftStep, useTypedTranslation, useInterval, RangePrice, type StylePropType } from "@shared";
import { useEffect, useState } from "react";
import { useGetRandomProductsQuery } from "@src/app/api/products";
import { getLeft, getSize, getDirection, getStyle, getPresent } from "./helpers";
import { useAppSelector } from "@src/app/store";

export default function RandomPresent (): JSX.Element {
  const randomRange = useAppSelector((state) => state.randomRange);
  const { from, to } = randomRange;
  const { data, isLoading, error } = useGetRandomProductsQuery({ from, to });
  const t = useTypedTranslation();
  const [random, setRandom] = useState(false);
  const [r, setR] = useState(false);

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
      setTimeout(() => { setRandom(false); setR(true); }, 10000);
    }
  }, [random]);

  if (isLoading || !data || error) return <p>Loading...</p>;

  return (
    <section className='m-3 rounded-2xl bg-purple-100 px-5 py-10'>
      <h2 className='primary md:h4 mb-10'>{t("randomPresent_header1")}</h2>
      <h2 className='primary-bold md:h2 mb-10 bg-gradient-primary-linear bg-clip-text text-right text-transparent'>{t("randomPresent_header2")}</h2>
      <div className='flex flex-col items-center justify-around md:flex-row '>
        <div className='flex w-full items-center justify-center'><span className='mr-2 text-[40px] text-purple-900 lg:text-[70px]'>1</span><p className='secondary lg:h6'>{t("randomPresent_step1")}</p> </div> <LeftStep/>
        <div className='flex w-full items-center justify-center'><span className='mr-2 text-[40px] text-purple-900 lg:text-[70px]'>2</span><p className='secondary lg:h6 md:w-[25vw]'>{t("randomPresent_step2")}</p> </div> <LeftStep/>
        <div className='flex w-full items-center justify-center'><span className='mr-2 text-[40px] text-purple-900 lg:text-[70px]'>3</span><p className='secondary lg:h6'>{t("randomPresent_step3")}</p> </div>
      </div>
      <div className='my-3 flex flex-col items-center justify-center'>
        <RangePrice/>
        <button onClick={() => { setRandom(true); setR(false); }} className='secondary-bold my-10 h-12 w-max rounded-md bg-blue-700 px-8 text-white'>{t("getRandomPresent")}</button>
      </div>

      <div className='mx-5 flex h-[27vw] whitespace-nowrap '>
        <div className="flex items-center">
          {data.map((el, i) => {
            return <img key={i} src={el.img} className="absolute bg-white object-contain shadow-randomize-result" style={getStyle(style[i])}/>;
          })}
        </div>
      </div>

      <div>
        {!random && r &&
          <div className="h-[27vw] w-[27vw]">
            <img src={data[getPresent(style)].img}/>
          </div>
        }
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import {
  LeftArrow,
  RightArrow,
  useInterval,
  useScreenWidth,
  useTypedTranslation,
} from "@shared";
import type {
  Banner,
  DirectionUnionType,
} from "@shared";

import classNames from "classnames";
import { useGetBannersQuery } from "@src/app/api/banner";

export default function BannerSlider (): JSX.Element {
  const { data, error, isLoading } = useGetBannersQuery("");
  const [banner, setBanner] = useState<Banner | null>(null);
  const [bannerIndex, setBannerIndex] = useState(0);
  const t = useTypedTranslation();
  const windowWidth = useScreenWidth();

  const setDirection = (direction: DirectionUnionType): number => {
    if (data) {
      switch (direction) {
        case "back":
          return bannerIndex > 0 ? bannerIndex - 1 : data.length - 1;
        case "forward":
          return bannerIndex < data.length - 1 ? bannerIndex + 1 : 0;
      }
    }
    return 0;
  };

  useEffect(() => {
    if (data) {
      setBanner(data[bannerIndex]);
    }
  }, [bannerIndex]);

  useInterval(() => setBannerIndex(setDirection("forward")), 5000);

  if (isLoading || !data || !banner || error) {
    return <div className=' m-auto h-[530px] w-[95%] mt-10 mb-5 animate-pulse bg-slate-200 sm:h-[40vw] sm:w-[90%]'/>;
  }

  return (
    <>
      <div className='relative m-auto mt-10 mb-5 h-[530px] w-[95%] sm:h-[40vw] sm:w-[90%] '>
        <img src={windowWidth > 640 ? banner.img : banner.mobileImg} alt={banner.title} className='absolute z-0 h-full w-full object-fill'/>
        <div className='absolute z-10 flex h-full w-full justify-between sm:items-center'>
          {windowWidth > 640 && <button
            className='group top-[10px] m-1 flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-700'
            onClick={() => setBannerIndex(setDirection("back"))}
          >
            <LeftArrow />
          </button>}
          <div className="mx-auto mt-5 w-[80%] text-white sm:mt-0">
            <h1 className='h3 sm:h1'>{banner.title}</h1>
            <h2 className='sm:h2 text-2xl font-semibold leading-relaxed'>{banner.description}</h2>
          </div>{windowWidth > 640 &&
          <button
            className='group m-1 flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-700'
            onClick={() => setBannerIndex(setDirection("forward"))}
          >
            <RightArrow />
          </button>}
        </div>
        <button className='btn-effect secondary-bold sm:primary-bold absolute inset-x-0 bottom-5 z-20 m-auto w-40 rounded-lg bg-black py-2 text-white'>
          {t("goToSale")}
        </button>
      </div>
      <div className='mt-2 flex justify-center'>
        {data.map((_, i) => {
          return (
            <button
              key={i}
              className={classNames(
                "border-blue-700 border-2 rounded-full w-4 h-4 m-1",
                {
                  "bg-blue-700": i === bannerIndex,
                  "bg-white": i !== bannerIndex,
                },
              )}
              onClick={() => setBannerIndex(i)}
            />
          );
        })}
      </div>
    </>
  );
}

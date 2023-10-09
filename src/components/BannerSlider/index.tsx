import { useEffect, useState } from "react";
import {
  DIRECTION,
  GoToSaleButton,
  LeftArrow,
  RightArrow,
  SCREEN,
  useGetCurrentLang,
  useInterval,
  useScreenWidth,
} from "@shared";
import type { Banner } from "@shared";

import classNames from "classnames";
import { useGetBannersQuery } from "@src/app/api/banner";

export default function BannerSlider(): JSX.Element {
  const lang = useGetCurrentLang();
  const { data, error, isLoading } = useGetBannersQuery(lang);
  const [banner, setBanner] = useState<Banner | null>(null);
  const [bannerIndex, setBannerIndex] = useState(0);
  const windowWidth = useScreenWidth();

  const setDirection = (direction: string): number => {
    if (data) {
      switch (direction) {
        case DIRECTION.BACK:
          return bannerIndex > 0 ? bannerIndex - 1 : data.length - 1;
        case DIRECTION.FORWARD:
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

  useInterval(() => setBannerIndex(setDirection(DIRECTION.FORWARD)), 5000);

  if (isLoading || !data || !banner || error) {
    return (
      <div className="m-auto mb-5 mt-10 h-[530px] w-[95%] animate-pulse bg-slate-200 sm:h-[40vw] sm:w-[90%]" />
    );
  }

  return (
    <>
      <div className="relative m-auto mb-5 mt-10 h-[530px] w-[95%] sm:h-[40vw] sm:w-[90%] ">
        <img
          src={windowWidth > SCREEN.SM ? banner.img : banner.mobileImg}
          alt={banner.title}
          className="absolute z-0 h-full w-full object-fill"
        />
        <div className="absolute z-10 flex h-full w-full justify-between sm:items-center">
          {windowWidth > SCREEN.SM && (
            <button
              className="group top-[10px] m-1 flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-700"
              onClick={() => setBannerIndex(setDirection(DIRECTION.BACK))}
            >
              <LeftArrow />
            </button>
          )}
          <div className="mx-auto mt-5 w-[80%] text-white sm:mt-0">
            <h1 className="h3 sm:h1">{banner.title}</h1>
            <h2 className="lg:h2 text-2xl font-semibold leading-relaxed">
              {banner.description}
            </h2>
            {windowWidth > SCREEN.SM && <GoToSaleButton />}
          </div>
          {windowWidth > SCREEN.SM && (
            <button
              className="group m-1 flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-700"
              onClick={() => setBannerIndex(setDirection(DIRECTION.FORWARD))}
            >
              <RightArrow />
            </button>
          )}
        </div>
        {windowWidth < SCREEN.SM && <GoToSaleButton />}
      </div>
      <div className="mt-2 flex justify-center">
        {data.map((_, i) => {
          return (
            <button
              key={i}
              className={classNames(
                "m-1 h-4 w-4 rounded-full border-2 border-blue-700",
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

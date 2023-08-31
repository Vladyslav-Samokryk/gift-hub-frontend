import { useEffect, useState } from "react";
import type { Banner } from "@shared";
import {
  LeftArrow,
  RightArrow,
  useInterval,
  useTypedTranslation,
} from "@shared";
import classNames from "classnames";
import axios from "axios";
import { useBannersQuery } from "@src/app/api/banner";

export default function BannerSlider (): JSX.Element {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [banners, setBanners] = useState<[] | Banner[]>([]);
  const [banner, setBanner] = useState(banners[0]);
  const t = useTypedTranslation();
  const { i } = useBannersQuery();

  console.log(i);

  const setDirection = (direction: "back" | "forward"): number => {
    switch (direction) {
      case "back":
        return bannerIndex > 0 ? bannerIndex - 1 : banners.length - 1;
      case "forward":
        return bannerIndex < banners.length - 1 ? bannerIndex + 1 : 0;
    }
  };

  useEffect(() => {
    setBanner(banners[bannerIndex]);
  }, [bannerIndex]);

/*   useEffect(() => {
    async function getBanners () {
      const { data } = await axios.get();
      setBanners(data);
    }
    getBanners();
  }, []); */

  useInterval(() => setBannerIndex(setDirection("forward")), 5000);
  if (banner) {
    return (
      <>
        <div className='relative h-[40vw] w-[80%] px-[10%]'>
          <img src={banner.img} alt={banner.title} className='absolute z-0 h-full w-full object-fill'/>
          <div className='absolute z-10 flex h-full w-full items-center justify-between'>
            <button
              className='group top-[10px] m-1 flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent-turkus'
              onClick={() => setBannerIndex(setDirection("back"))}
            >
              <LeftArrow />
            </button>
            <div className="w-[80%]">
              <h1 className='h1'>{banner.title}</h1>
              <h2 className='h2'>{banner.description}</h2>
              <button className='btn-effect primary-bold rounded-lg bg-black px-9 py-2 text-white'>
                {t("goToSale")}
              </button>
            </div>
            <button
              className='group m-1 flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent-turkus'
              onClick={() => setBannerIndex(setDirection("forward"))}
            >
              <RightArrow />
            </button>
          </div>
        </div>
        <div className='flex justify-center'>
          {banners.map((_, i) => {
            return (
              <button
                key={i}
                className={classNames(
                  "border-accent-turkus border-2 rounded-full w-4 h-4 m-1",
                  {
                    "bg-accent-turkus": i === bannerIndex,
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
  return <div className='mx-[10%] h-[40vw] w-[80%] bg-slate-200'/>;
}

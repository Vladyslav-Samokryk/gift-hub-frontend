import { useEffect, useState } from "react";
import { LeftArrow, RightArrow, useInterval, useTypedTranslation } from "@src/shared";
import classNames from "classnames";

interface BannerMockType {
  img: string;
  link: string;
  title: string;
  description: string;
}

const bannerMock: BannerMockType[] = [{
  img: "pink",
  link: "catalog/pink",
  title: "Sales",
  description: "Go here and buy it PINK!",
},
{
  img: "green",
  link: "catalog/green",
  title: "Sales",
  description: "Go here and buy it GREEN!",
},
{
  img: "blue",
  link: "catalog/blue",
  title: "Sales",
  description: "Go here and buy it BLUE!",
}];

export default function BannerSlider (): JSX.Element {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [banner, setBanner] = useState(bannerMock[0]);
  const t = useTypedTranslation();

  const setDirection = (direction: "back" | "forward"): number => {
    switch (direction) {
    case "back":
      return bannerIndex > 0 ? bannerIndex - 1 : bannerMock.length - 1;
    case "forward":
      return bannerIndex < bannerMock.length - 1 ? bannerIndex + 1 : 0;
    }
  };

  useEffect(() => {
    setBanner(bannerMock[bannerIndex]);
  }, [bannerIndex]);

  useInterval(() => setBannerIndex(setDirection("forward")), 5000);

  return <>
    <div key={banner.img} className={"flex justify-center items-center w-full"}>
      <button className="arrow-icon rounded-full w-9 h-9 flex justify-center items-center hover:bg-accent-turkus" onClick={() => setBannerIndex(setDirection("back"))}><LeftArrow/></button>
      <div>
        <h1 className="h1">{banner.title}</h1>
        <h2 className="h2">{banner.description}</h2>
        <button className="bg-black text-white px-9 py-2 primary-bold rounded-lg">{t("goToSale")}</button>
      </div>
      <button className="arrow-icon rounded-full w-9 h-9 flex justify-center items-center hover:bg-accent-turkus" onClick={() => setBannerIndex(setDirection("forward"))}><RightArrow/></button>
    </div>
    <div className="flex justify-center">{bannerMock.map((_, i) => {
      return <button key={i} className={classNames("border-accent-turkus border-2 rounded-full w-4 h-4 m-1", {
        "bg-accent-turkus": (i === bannerIndex),
        "bg-white": (i !== bannerIndex),
      })} onClick={() => setBannerIndex(i)}/>;
    })}</div>
  </>
  ;
}

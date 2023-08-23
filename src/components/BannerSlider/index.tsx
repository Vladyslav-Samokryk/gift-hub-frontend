import { useEffect, useState } from "react";
import { LeftArrow, RightArrow, useInterval } from "@src/shared";
import classNames from "classnames";

interface BannerMockType {
  img: string;
  link: string;
  text: string;
}

const bannerMock: BannerMockType[] = [{
  img: "pink",
  link: "catalog/pink",
  text: "Go here and buy it PINK!",
},
{
  img: "green",
  link: "catalog/green",
  text: "Go here and buy it GREEN!",
},
{
  img: "blue",
  link: "catalog/blue",
  text: "Go here and buy it BLUE!",
}];

export default function BannerSlider (): JSX.Element {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [banner, setBanner] = useState(bannerMock[0]);

  function direction (direction: number): number {
    return !direction
      ? bannerIndex > 0 ? bannerIndex - 1 : bannerMock.length - 1
      : bannerIndex < bannerMock.length - 1 ? bannerIndex + 1 : 0;
  }

  useEffect(() => {
    setBanner(bannerMock[bannerIndex]);
  }, [bannerIndex]);

  useInterval(() => setBannerIndex(direction(1)), 5000);

  return (
    <>
      <div key={banner.img} className={"flex justify-center items-center w-full"}>
        <button className="arrow-icon rounded-full w-9 h-9 flex justify-center items-center hover:bg-[#00bcd4]" onClick={() => setBannerIndex(direction(0))}><LeftArrow/></button>
        <div>
          <h1>Sales</h1>
          <h2>{banner.text}</h2>
          <button>Get my sales</button>
        </div>
        <button className="arrow-icon rounded-full w-9 h-9 flex justify-center items-center hover:bg-[#00bcd4]" onClick={() => setBannerIndex(direction(1))}><RightArrow/></button>
      </div>
      <div className="flex justify-center">{bannerMock.map((_, i) => {
        return <button key={i} className={classNames("border-[#00bcd4] border-2 rounded-full w-4 h-4 m-1", {
          "bg-[#00bcd4]": (i === bannerIndex),
          "bg-white": (i !== bannerIndex),
        })} onClick={() => setBannerIndex(i)}/>;
      })}</div>
    </>
  );
}

import React, { useEffect, useState, useCallback } from "react";

interface bannerMockType {
  img: string;
  link: string;
  text: string;
}

export default function BannerSlider (): JSX.Element {
  const bannerMock: bannerMockType[] = [{
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

  const [bannerIndex, setBannerIndex] = useState(0);
  const [banner, setBanner] = useState(bannerMock[0]);

  const dots = Array.from({ length: bannerMock.length }, (_, i) => {
    return <button key={i} className={`border-[#0047FF] border-[2px] rounded-[100%] w-4 h-4 m-1 ${i === bannerIndex ? "bg-[#0047FF]" : "bg-white"}`} onClick={() => setBannerIndex(i)}></button>;
  });

  function direction (direction: number): number {
    return !direction
      ? bannerIndex > 0 ? bannerIndex - 1 : bannerMock.length - 1
      : bannerIndex < bannerMock.length - 1 ? bannerIndex + 1 : 0;
  }

  useEffect(() => {
    setBanner(bannerMock.find((el) => el === bannerMock[bannerIndex]));
    const intervalID = setInterval(() => setBannerIndex(bannerIndex < bannerMock.length - 1 ? bannerIndex + 1 : 0), 5000);
    return () => clearInterval(intervalID);
  }, [bannerIndex]);

  return (
    <>
      {
        <div key={banner.img} className={`bg-${banner.img}-500 flex justify-center w-full`}>
          <button onClick={() => setBannerIndex(direction(0))}>&lt;</button>
          <div>
            <h1>Sales</h1>
            <h2>{banner.text}</h2>
            <button>Get my sales</button>
          </div>
          <button onClick={() => setBannerIndex(direction(1))}>&gt;</button>
        </div>
      }
      <div className="flex justify-center">{dots}</div>
    </>

  );
}

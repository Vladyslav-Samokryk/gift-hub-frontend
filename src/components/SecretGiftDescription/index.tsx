import React from "react";
import TechnyRubiksCubePuzzle from "@src/shared/assets/img/secretGift/TechnyRubiksCubePuzzle.svg";
import TechnyBigGiftBox from "@src/shared/assets/img/secretGift/TechnyBigGiftBox.svg";
import { useTranslation } from "react-i18next";
import type { TRSecretGift } from "@src/shared/types/Translation";

interface SecretGiftDescriptionProps {
  setIsVisibleSelect: (prev: boolean) => void;
}

export default function SecretGiftDescription({
  setIsVisibleSelect,
}: SecretGiftDescriptionProps): JSX.Element {
  const { t } = useTranslation();
  const secretGift: TRSecretGift = t("secret_gift", {
    returnObjects: true,
  });
  return (
    <>
      <section className="relative flex flex-col items-center justify-between gap-2 md:mt-[-20px] md:flex-row md:justify-center md:gap-14  ">
        <div className="">
          <img
            className=" w-full max-w-full object-cover"
            src={TechnyRubiksCubePuzzle}
            alt="TechnyRubiksCubePuzzle"
          />
        </div>
        <div className="flex max-w-full flex-col items-start justify-start md:relative md:ml-[-50px] md:max-w-[60%]">
          <h4 className="md:h4 primary-linear mb-3 w-full text-center text-2xl leading-8 md:text-start">
            {secretGift.title}
          </h4>
          <p className="md:primary text-lg font-normal leading-[21.6px] md:text-[24px] md:leading-[29px]">
            {secretGift.subtitles[0]}
          </p>
        </div>
      </section>
      <section className="mt-10 flex max-w-[1330px] flex-col items-center justify-center md:mt-10">
        <p className="primary text-2xl font-normal leading-6">
          {secretGift.process_header}
        </p>
        <ul className="primary mt-8 grid w-full list-decimal  grid-cols-1 grid-rows-3 gap-5 pl-8  md:mt-10 md:grid-cols-3 md:grid-rows-1 md:gap-14 ">
          <li className="list-item  max-w-full pl-6 after:content-firstBobble md:max-w-[347px] ">
            {secretGift.process_steps[0]}
          </li>
          <li className="list-item max-w-full pl-6 after:content-secondBobble md:max-w-[421px]">
            {secretGift.process_steps[1]}
          </li>
          <li className="list-item max-w-full  pl-6 after:content-thirdBobble md:max-w-[432px]">
            {secretGift.process_steps[2]}
          </li>
        </ul>
      </section>
      <section className="mt-10 flex w-full max-w-[1283px] flex-col  items-center justify-between gap-5 md:mt-28 md:flex-row md:gap-2">
        <div className="order-2 max-w-[943px] md:order-1">
          <p className="primary primary-linear mt-3 text-start text-[18px] leading-[21.6px] md:mt-0 md:text-center md:text-[24px] md:leading-[24px]">
            {secretGift.subtitles[1]}
          </p>
        </div>
        <div className="order-1 w-full max-w-[220px] md:order-2 md:h-[325px] md:max-w-[300px]">
          <img
            className=" w-full max-w-full object-cover"
            src={TechnyBigGiftBox}
            alt="TechnyBigGiftBox"
          />
        </div>
      </section>
      <button
        type="button"
        className="btn btn-effect mt-10 px-32 py-5 font-rubik text-[16px]  leading-6 md:px-9"
        onClick={() => setIsVisibleSelect(true)}
      >
        {secretGift.try_button}
      </button>
    </>
  );
}

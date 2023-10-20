import {
  Basket,
  RangePrice,
  UserAccount,
  Wishlist,
  useGetCurrentLang,
} from "@src/shared";
import { GoMainPageArrow } from "@src/shared/assets/svg/Arrows";
import { useNavigate } from "react-router-dom";
import TechnyRubiksCubePuzzle from "@src/shared/assets/img/secretGift/TechnyRubiksCubePuzzle.svg";
import TechnyBigGiftBox from "@src/shared/assets/img/secretGift/TechnyBigGiftBox.svg";
import { useTranslation } from "react-i18next";
import type { TRSecretGift } from "@src/shared/types/Translation";
import { useEffect, useState } from "react";
import { SelectSecretGift } from "@src/components";
import { useGetCategoriesQuery } from "@src/app/api/categories";
import className from "classnames";

export default function SecretGift(): JSX.Element {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isVisibleSelect, setIsVisibleSelect] = useState(false);
  const [range, setRange] = useState({
    from: 200,
    to: 700,
  });
  const secretGift: TRSecretGift = t("secret_gift", {
    returnObjects: true,
  });
  const lang = useGetCurrentLang();
  const { data, isLoading } = useGetCategoriesQuery(lang);

  if (!data || isLoading) {
    return <p>Loading...</p>;
  }

  const options = data?.map((category) => ({
    value: category.url,
    label: category.name,
  })) as Array<{
    value: string;
    label: string;
  }>;

  return (
    <div className="m-0 mx-auto  mb-24 flex w-full flex-col items-center text-black">
      <section className="flex h-28 w-full items-start justify-between px-10 lg:mb-1 lg:h-fit">
        <div className="flex items-center justify-start gap-1">
          <button
            className="group top-[10px] m-1 flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-700"
            onClick={() => navigate("/")}
          >
            <GoMainPageArrow />
          </button>
          <h6 className="h6">Головна</h6>
        </div>
        <section className="flex w-36 justify-between self-center">
          <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-900">
            <UserAccount />
          </button>
          <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-900">
            <Wishlist />
          </button>
          <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-900">
            <Basket type="sm" className="fill-black group-hover:fill-white" />
          </button>
        </section>
      </section>
      {!isVisibleSelect ? (
        <>
          <section className="relative mt-20 flex items-center justify-center gap-2 pl-[19rem]">
            <div className="absolute left-[-10px] top-[-102px]">
              <img
                className=" w-full max-w-full object-cover"
                src={TechnyRubiksCubePuzzle}
                alt="TechnyRubiksCubePuzzle"
              />
            </div>
            <div className="flex max-w-[963px] flex-col items-start justify-start">
              <h4 className="h4 primary-linear mb-3">{secretGift.title}</h4>
              <p className="primary text-[24px] leading-[29px]">
                {secretGift.subtitles[0]}
              </p>
            </div>
          </section>
          <section className="mt-36 flex max-w-[1330px] flex-col items-center justify-center">
            <p className="primary text-2xl font-normal">
              {secretGift.process_header}
            </p>
            <ul className="primary mt-10 grid list-decimal grid-cols-3 gap-14 text-2xl font-light leading-[24px]">
              <li className="after:content-firstBobble  list-item max-w-[347px]">
                {secretGift.process_steps[0]}
              </li>
              <li className="after:content-secondBobble list-item max-w-[421px]">
                {secretGift.process_steps[1]}
              </li>
              <li className="after:content-thirdBobble list-item  max-w-[432px]">
                {secretGift.process_steps[2]}
              </li>
            </ul>
          </section>
          <section className=" mt-28 flex w-full max-w-[1283px] items-center justify-between gap-2">
            <div className="max-w-[943px]">
              <p className="primary primary-linear text-center text-[24px] leading-[24px]">
                {secretGift.subtitles[1]}
              </p>
            </div>
            <div className="h-[325px] w-[300px]">
              <img
                className=" w-full max-w-full object-cover"
                src={TechnyBigGiftBox}
                alt="TechnyBigGiftBox"
              />
            </div>
          </section>
          <button
            type="button"
            className="btn btn-effect mt-10 px-9 py-5 font-rubik text-[16px] leading-6"
            onClick={() => setIsVisibleSelect((prev) => !prev)}
          >
            {secretGift.try_button}
          </button>
        </>
      ) : (
        <section className="mt-5 flex flex-col items-center justify-center rounded-[20px] p-5">
          <form className="flex flex-col items-center justify-center ">
            <div className="">
              <h5 className="h5  mb-3">Обери категорію подарунка:</h5>
              <SelectSecretGift options={options} />
            </div>
            <div className="mt-10 w-full">
              <h5 className="h5  mb-3">Обери ціновий діапазон:</h5>
              <RangePrice
                permission={false}
                setRange={setRange}
                {...range}
                style={{ width: "100%" }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-effect mt-10 px-9 py-5 font-rubik text-[16px] leading-6"
            >
              Старт
            </button>
          </form>
        </section>
      )}
    </div>
  );
}

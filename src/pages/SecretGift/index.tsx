import { Basket, UserAccount, Wishlist } from "@src/shared";
import { GoMainPageArrow } from "@src/shared/assets/svg/Arrows";
import { useNavigate } from "react-router-dom";
import TechnyRubiksCubePuzzle from "@src/shared/assets/img/secretGift/TechnyRubiksCubePuzzle.svg";
import TechnyBigGiftBox from "@src/shared/assets/img/secretGift/TechnyBigGiftBox.svg";
import { useTranslation } from "react-i18next";
import type { TRSecretGift } from "@src/shared/types/Translation";

export default function SecretGift(): JSX.Element {
  const { t } = useTranslation();

  const secretGift: TRSecretGift = t("secret_gift", {
    returnObjects: true,
  });

  const navigate = useNavigate();
  return (
    <div className="m-0 mx-auto  mb-24 flex w-full flex-col items-center">
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
          <p className="primary text-[24px] leading-[29px] text-black">
            {secretGift.subtitles[0]}
          </p>
        </div>
      </section>
      <section className="mt-36 flex max-w-[1330px] flex-col items-center justify-center">
        <p className="primary text-2xl font-normal text-black">
          {secretGift.process_header}
        </p>
        <ul className="primary mt-10 grid list-decimal grid-cols-3 gap-14 text-2xl font-light leading-[24px] text-black">
          <li className="after:content-firstBobble relative z-20 max-w-[347px] after:absolute after:left-[-34px] after:top-0 after:z-[-1] after:h-[30px] after:w-[30px]">
            {secretGift.process_steps[0]}
          </li>
          <li className=" after:content-secondBobble relative z-20 max-w-[421px] after:absolute after:left-[-34px] after:top-0 after:z-[-1] after:h-[30px] after:w-[30px]">
            {secretGift.process_steps[1]}
          </li>
          <li className=" after:content-thirdBobble relative z-20 max-w-[432px] after:absolute after:left-[-34px] after:top-0 after:z-[-1] after:h-[30px] after:w-[30px]">
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
      >
        {secretGift.try_button}
      </button>
    </div>
  );
}
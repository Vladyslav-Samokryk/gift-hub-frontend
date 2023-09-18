import React from "react";
import { useTypedTranslation, type ProductCardType, WhiteClose, TryAgainIcon } from "@src/shared";
import { Link } from "react-router-dom";

interface WinSectionProps {
  setUserWin: (value: boolean) => void;
  setWheelRotate: (value: boolean) => void;
  setPresent: (value: ProductCardType | null) => void;
  present: ProductCardType | null;
}

export default function WinSection ({ setUserWin, setWheelRotate, setPresent, present }: WinSectionProps): JSX.Element {
  const t = useTypedTranslation();
  if (present === null) {
    return <p>Error</p>;
  } else {
    return (
      <div className='h-screen relative w-screen rounded-2xl bg-cover bg-center py-10 px-5 text-center text-white' style={{ backgroundImage: "url('src/shared/assets/img/RandomPresentBg.svg')" }}>
        <button className="absolute right-4 top-4" onClick={() => setUserWin(false)}>
          <WhiteClose/>
        </button>

        <h3 className="h3 md:mt-8">{t("winTitle")}</h3>
        <img src={present.img} alt={present.name} className="absolute left-1/2 top-1/2 w-60 -translate-x-1/2 -translate-y-1/2 -rotate-6 shadow-2xl shadow-white/30 md:w-1/4"/>
        <div className="absolute bottom-10 md:bottom-20 flex w-[90%] flex-col items-center justify-center break-words md:w-full">
          <h4 className="text-4xl md:h4">{present.name}</h4>
          <Link to={"/"} className='additional text-blue-100 underline'>{t("knowMore")}</Link>
          <button className='btn btn-effect'>{t("makeOrder")}</button>
          <button className='flex' onClick={() => { setWheelRotate(false); setPresent(null); setUserWin(false); }}>
            <TryAgainIcon/>
            <p>{t("tryAgain")}</p>
          </button>
        </div>
      </div>
    );
  }
}

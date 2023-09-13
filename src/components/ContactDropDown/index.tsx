import { useState } from "react";
import { DropDown, DropUp, EmailLogo, TelegramLogo, useTypedTranslation } from "@shared";
import classNames from "classnames";

export default function ContactDropDown (): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTypedTranslation();
  return (
    <div className="relative">
      <button className="flex items-center" onClick={() => setIsVisible(prev => !prev)}>
        <h3 className="hover:text-accent-turkus">{t("contacts")}</h3>
        {isVisible ? <DropUp/> : <DropDown />}
      </button>

      <div className={classNames("absolute border-2 border-blue-900 bg-white z-10 -left-16 p-4 w-56 md:w-80 w-52 top-14", {
        block: isVisible,
        hidden: !isVisible,
      })}>
        <svg className="absolute -top-10 md:left-20 left-12">
          <polyline points="70 40 80 25 90 40" stroke="#140285" strokeWidth="2" fill="white"
            strokeLinecap="butt" strokeLinejoin="round"/>
        </svg>
        <h3 className="md:primary-bold mb-3 text-center text-[10px] font-semibold text-blue-900">{t("contacts_header")}</h3>
        <div className="mb-3 flex items-center">
          <EmailLogo/>
          <a href="mailto:gifthub@gmail.com" className="md:secondary pl-3 text-[10px] font-light hover:text-purple-900">{t("contacts_email")}</a>
        </div>
        <div className="flex items-center">
          <TelegramLogo className="fill-blue-900"/>
          <a href="https://telegram.me/share/url?url=gift_hub_channel" className="md:secondary pl-3 text-[10px] font-light hover:text-purple-900">{t("contacts_telegram")}</a>
        </div>
      </div>
    </div>
  );
}

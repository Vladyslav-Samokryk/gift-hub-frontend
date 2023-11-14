import { useState } from "react";
import { DropDown, DropUp, EmailLogo, TelegramLogo } from "@shared";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ContactDropDown(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = (): void => {
    setIsVisible((prev) => !prev);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <>
      {isVisible && (
        <motion.div
          className="absolute left-0 top-0 z-10 h-full w-full"
          onClick={() => setIsVisible(false)}
        />
      )}
      <div className="relative">
        <button className="flex items-center" onClick={() => toggleMenu()}>
          <h3 className="hover:text-blue-700">{t("header_links.contacts")}</h3>
          {isVisible ? <DropUp /> : <DropDown />}
        </button>

        <motion.div
          initial="exit"
          animate={isVisible ? "enter" : "exit"}
          variants={subMenuAnimate}
          className="absolute -left-3/4 top-12 z-20 w-56 border-2 border-blue-900 bg-white p-4 md:w-80"
        >
          <svg className="absolute -top-5 left-[48%] -z-10 h-5 w-5">
            <polyline
              points="0 20 10 0 20 20"
              stroke="#140285"
              strokeWidth="2"
              fill="white"
              strokeLinecap="butt"
              strokeLinejoin="round"
            />
          </svg>

          <h3 className="md:primary-bold mb-3 text-center text-[10px] font-semibold text-blue-900">
            {t("contacts_popup.header")}
          </h3>
          <button className="group mb-3 flex items-center">
            <EmailLogo />
            <a
              href="mailto:gifthub@gmail.com"
              className="md:secondary pl-3 text-[10px] font-light group-hover:text-purple-900"
            >
              {t("contacts_popup.email")}
            </a>
          </button>
          <button className="group flex items-center ">
            <TelegramLogo className="fill-blue-900" />
            <a
              href="https://telegram.me/share/url?url=gift_hub_channel"
              target="_blank"
              className="md:secondary pl-3 text-[10px] font-light group-hover:text-purple-900"
              rel="noreferrer"
            >
              {t("contacts_popup.telegram")}
            </a>
          </button>
        </motion.div>
      </div>
    </>
  );
}

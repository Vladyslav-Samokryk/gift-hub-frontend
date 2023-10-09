import { useState, type MouseEvent } from "react";
import { changeLanguage } from "i18next";
import className from "classnames";
import { useTranslation } from "react-i18next";
import type { TRLang } from "@src/shared";

export default function LanguageToggle(): JSX.Element {
  const { t } = useTranslation();
  const [active, setActive] = useState("en");
  const lang: TRLang = t("lang", { returnObjects: true });

  const handleChangeLanguage = (event: MouseEvent<HTMLButtonElement>): void => {
    const { name } = event.target as HTMLButtonElement;
    setActive(name);
    void changeLanguage(name);
  };

  return (
    <div className="flex pt-5">
      {Object.keys(lang).map((language, index) => (
        <div key={language} className="flex">
          <button
            name={language}
            onClick={handleChangeLanguage}
            className={className({
              "md:secondary mobile-font text-blue-200": language !== active,
              "md:secondary-bold mobile-font font-bold text-blue-700":
                language === active,
            })}
          >
            {t(`lang.${language}`)}
          </button>
          {!index && <p className="px-1">|</p>}
        </div>
      ))}
    </div>
  );
}

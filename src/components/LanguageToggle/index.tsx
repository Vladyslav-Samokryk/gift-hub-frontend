import { useState, type MouseEvent } from "react";
import { changeLanguage } from "i18next";
import className from "classnames";

import { useTypedTranslation } from "@shared";

export default function LanguageToggle (): JSX.Element {
  const t = useTypedTranslation();
  const [active, setActive] = useState("en");

  const handleChangeLanguage = (event: MouseEvent<HTMLButtonElement>): void => {
    const { name } = event.target as HTMLButtonElement;
    setActive(name);
    void changeLanguage(name);
  };

  return <div className="flex pt-5">
    {(["uk", "en"] as TranslationKeys[]).map((language, index) => (
      <div key={language} className="flex">
        <button
          name={language}
          onClick={handleChangeLanguage}
          className={className({
            "text-blue-200 md:secondary mobile-font": language !== active,
            "text-blue-700 md:secondary-bold mobile-font font-bold": language === active,
          })}
        >
          {t(language)}
        </button>
        {!index && <p className="px-1">|</p>}
      </div>
    ),
    )}
  </div>;
}

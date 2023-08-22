import { useState, type MouseEvent } from "react";
import { changeLanguage } from "i18next";

import { useTypedTranslation } from "@shared";

export default function LanguageToggle (): JSX.Element {
  const t = useTypedTranslation();
  const [active, setActive] = useState("en");

  const handleChangeLanguage = (event: MouseEvent<HTMLButtonElement>): void => {
    const { name } = event.target as HTMLButtonElement;
    setActive(name);
    void changeLanguage(name);
  };

  return (
    <div className="flex font-rubik font-normal ">
      {(["uk", "en"] as TranslationKeys[]).map((language, index) => (
        <>
          <button
            key={language}
            name={language}
            onClick={handleChangeLanguage}
            className={language !== active ? "text-blue-200" : "text-black" }
          >
            {t(language)}
          </button>
          {!index && <p className="px-1">|</p>}
        </>
      ),
      )}
    </div>
  );
}

import type { ChangeEvent } from "react";
import { changeLanguage } from "i18next";
import { useTypedTranslation } from "@i18n";

export default function Header (): JSX.Element {
  const t = useTypedTranslation();

  const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>): void => {
    void changeLanguage(event.target.value);
  };

  return (
    <div>
      <h2>{t("header")}</h2>
      <select onChange={handleChangeLanguage}>
        <option value="en">{"EN"}</option>
        <option value="uk">{"UK"}</option>
      </select>
    </div>
  );
}

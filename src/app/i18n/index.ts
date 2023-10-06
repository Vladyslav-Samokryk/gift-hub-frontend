import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { en } from "./locales/en";
import { ua } from "./locales/ua";

/* eslint-disable @typescript-eslint/no-floating-promises */
i18n.use(initReactI18next).init({
  resources: {
    en: { ...en },
    ua: { ...ua },
  },
  debug: true,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true,
});

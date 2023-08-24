interface AllLocalesType {
  translation: {
    header: string;
    footer: string;
    aboutAs: string;
    contacts: string;
    catalog: string;
    goToSale: string;
    en: string;
    uk: string;
  };
}

type TranslationKeys = keyof AllLocalesType["translation"];

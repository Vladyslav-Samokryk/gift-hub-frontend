interface AllLocalesType {
  translation: {
    header: string;
    footer: string;
    aboutAs: string;
    contacts: string;
    catalog: string;
    en: string;
    uk: string;
  };
}

type TranslationKeys = keyof AllLocalesType["translation"];

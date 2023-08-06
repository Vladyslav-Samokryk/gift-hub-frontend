interface AllLocalesType {
  translation: {
    header: string;
    footer: string;
    aboutAs: string;
    contacts: string;
    en: string;
    uk: string;
  };
}

type TranslationKeys = keyof AllLocalesType["translation"];

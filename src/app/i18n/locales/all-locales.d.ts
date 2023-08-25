interface AllLocalesType {
  translation: {
    header: string;
    footer: string;
    aboutAs: string;
    contacts: string;
    catalog: string;
    goToSale: string;
    follow_us: string;
    contact_us: string;
    contact_us_messengers: string;
    frequentlyAskedQuestion: string;
    offerContract: string;
    paymentAndDelivery: string;
    returnConditions: string;
    privacyPolicy: string;
    copyrightText: string;
    help: string;
    en: string;
    uk: string;
  };
}

type TranslationKeys = keyof AllLocalesType["translation"];

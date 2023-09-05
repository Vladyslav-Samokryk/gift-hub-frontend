interface AllLocalesType {
  translation: {
    header: string;
    footer: string;
    aboutAs: string;
    contacts: string;
    catalog: string;
    secretPresent: string;
    search: string;
    goToSale: string;
    aboutSecterPresent: string;
    follow_us: string;
    contact_us: string;
    contact_us_messengers: string;
    frequentlyAskedQuestion: string;
    offerContract: string;
    paymentAndDelivery: string;
    returnConditions: string;
    privacyPolicy: string;
    copyrightText: string;
    randomPresent_header1: string;
    randomPresent_header2: string;
    randomPresent_step1: string;
    randomPresent_step2: string;
    randomPresent_step3: string;
    getRandomPresent: string;
    seeMore: string;
    help: string;
    en: string;
    uk: string;
  };
}

type TranslationKeys = keyof AllLocalesType["translation"];

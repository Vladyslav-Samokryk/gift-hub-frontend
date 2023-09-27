interface AllLocalesType {
  translation: {
    categories: string[];
    subcategories: string[][];
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
    randomPresent: {
      headers: string[];
      steps: string[];
    };
    winTitle: string;
    knowMore: string;
    tryAgain: string;
    makeOrder: string;
    getRandomPresent: string;
    seeMore: string;
    contacts_header: string;
    contacts_email: string;
    contacts_telegram: string;
    help: string;
    en: string;
    uk: string;
    popularProductSection: string;
    newProductSection: string;
  };
}

type TranslationKeys = keyof AllLocalesType["translation"];

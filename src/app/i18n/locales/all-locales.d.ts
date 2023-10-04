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
    login: string;
    login_btn: string;
    wishlistError: string;
    ph_email: string;
    ph_password_login: string;
    ph_password_registr: string[];
    password_require: string[];
    person_name: string;
    person_lastName: string;
    registration: string;
    registration_btn: string;
    enter_as: string;
    remember_person: string;
    remind_password: string;
    or: string;
    contacts_header: string;
    contacts_email: string;
    contacts_telegram: string;
    help: string;
    en: string;
    uk: string;
    popularProductSection: string;
    newProductSection: string;
    filters_title: string;
    filters: {
      sale: string;
      pending: string;
      available: string;
    };
    rate: string;
    price: string;
    sorts_title: string;
    sorts: {
      cheap: string;
      expensive: string;
      new: string;
      popular: string;
      rate: string;
    };
  };
}

type TranslationKeys = keyof AllLocalesType["translation"];

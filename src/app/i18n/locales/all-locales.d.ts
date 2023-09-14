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
    help: string;
    en: string;
    uk: string;
  };
}

type TranslationKeys = keyof AllLocalesType["translation"];

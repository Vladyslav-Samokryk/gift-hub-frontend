export interface TRCriteria {
  quality: string;
  photo_match: string;
  description_match: string;
  price: string;
}

export interface TRCharacteristics {
  description: string;
  pay_deliver: string;
  faq: string;
}

export interface TRFAQ {
  question: string;
  answer: string;
}

export interface TRHeader {
  secret_present: string;
  about: string;
  contacts: string;
  catalog: string;
}

export interface TRFooter {
  follow_us: string;
  contact_us: string;
  copyright: string;
  help: string;
}

export interface TRHelp {
  offer_contract: string;
  payment_delivery: string;
  return_conditions: string;
  privacy_policy: string;
}

export interface TRCabinet {
  personal_info: string;
  address: string;
  security: string;
  wishlist: string;
  history: string;
}

export interface TRLang {
  en: string;
  ua: string;
}

export interface TRRandomPresent {
  headers: string[];
  steps: string[];
  btn_get_present: string;
}

export interface TRSecretGift {
  header_link: string;
  title: string;
  subtitles: string[];
  process_header: string;
  process_steps: string[];
  try_button: string;
}

export interface TRFilters {
  sale: string;
  pending: string;
  available: string;
}

export interface TRSorts {
  cheap: string;
  expensive: string;
  new: string;
  popular: string;
  rate: string;
}

export interface TROfferContact {
  main_title: string;
  title: string;
  subtitle: string[];
  text: {
    first: string[];
    second: string[];
    third: string[];
    fourth: string[];
    fifth: string[];
    sixth: string[];
  };
  sub_text: {
    first: string[];
    second: string[];
    third: string[];
    fourth: string[];
    fifth: string[];
  };
}

export interface TRPaymantAndDelivery {
  main_title: string;
  text: string[];
}

export interface TRReturnConditions {
  main_title: string;
  text: string[];
}

export interface TRPrivacyPolice {
  main_title: string;
  text: string[];
}

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
  faq: string;
  offer_contract: string;
  payment_delivery: string;
  return_conditions: string;
  privacy_policy: string;
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

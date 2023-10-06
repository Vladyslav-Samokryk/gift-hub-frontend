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
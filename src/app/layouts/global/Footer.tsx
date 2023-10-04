import { Link } from "react-router-dom";
import {
  ApplePayLogo, EmailLogo, GooglePayLogo, LocationPointLogo, Logo, MasterCardLogo, TelegramLogo, TikTokLogo, TweeterLogo, VisaLogo, WhatsAppLogo, useTypedTranslation,
  FacebookLogo,
  InstagramLogo,
} from "@shared";
import { CONTACT_INFO } from "@config";

const helpSection: Array<{ key: string; path: PathUnion; translationKey: TranslationKeys; }> = [
  {
    key: "helpSection_1",
    path: "/",
    translationKey: "frequentlyAskedQuestion",
  },
  {
    key: "helpSection_2",
    path: "/",
    translationKey: "offerContract",
  },
  {
    key: "helpSection_3",
    path: "/",
    translationKey: "paymentAndDelivery",
  },
  {
    key: "helpSection_4",
    path: "/",
    translationKey: "returnConditions",
  },
  {
    key: "helpSection_5",
    path: "/",
    translationKey: "privacyPolicy",
  },
];

const contactUsSection: Array<{ key: string; path: PathUnion; value: string; logo: JSX.Element; }> = [
  {
    key: "contactUsSection_1",
    path: "/",
    logo: <WhatsAppLogo />,
    value: CONTACT_INFO.number,
  },
  {
    key: "contactUsSection_2",
    path: "/",
    logo: <EmailLogo />,
    value: CONTACT_INFO.mail,
  },
  {
    key: "contactUsSection_3",
    path: "/",
    logo: <LocationPointLogo />,
    value: CONTACT_INFO.location,
  },
];

const paymentSection: Array<{ key: string; path: PathUnion; logo: JSX.Element; }> = [
  {
    key: "paymentSection_1",
    path: "/",
    logo: <VisaLogo />,
  },
  {
    key: "paymentSection_2",
    path: "/",
    logo: <MasterCardLogo />,
  },
  {
    key: "paymentSection_3",
    path: "/",
    logo: <GooglePayLogo />,
  },
  {
    key: "paymentSection_4",
    path: "/",
    logo: <ApplePayLogo />,
  },
];

const followUsSection: Array<{ key: string; path: PathUnion; logo: JSX.Element; }> = [
  {
    key: "followUsSection_1",
    path: "/",
    logo: <TweeterLogo />,
  },
  {
    key: "followUsSection_2",
    path: "/",
    logo: <FacebookLogo />,
  },
  {
    key: "followUsSection_3",
    path: "/",
    logo: <TikTokLogo />,
  },
  {
    key: "followUsSection_4",
    path: "/",
    logo: <InstagramLogo />,
  },
];

export default function Footer (): JSX.Element {
  const t = useTypedTranslation();

  return (
    <footer className="divide-gray-400 bg-white px-10 pt-8 font-rubik shadow-main lg:grid lg:grid-cols-3 lg:divide-x lg:px-12 mt-10">
      <section className="flex flex-col pb-5 lg:items-center">
        <div className="self-center">
          <Logo />
        </div>
        <fieldset className="flex h-max gap-4">
          <legend className="pb-5">
            <strong className="text-primary-900">{t("follow_us")}:</strong>
          </legend>
          {followUsSection.map(({ key, logo, path }) => (
            <Link key={key} to={path}>{logo}</Link>
          ))}
        </fieldset>
      </section>

      <section className="grid gap-6 border-t py-5 lg:justify-center lg:border-t-0">
        <fieldset className="flex w-full flex-col gap-4">
          <legend className="pb-5 text-primary-900">
            <strong>{t("contact_us")}:</strong>
          </legend>
          {contactUsSection.map(({ key, path, value, logo }) => (
            <address key={key}>
              <Link to={path} className="flex space-x-2">
                {logo}
                <span className="secondary not-italic">{value}</span>
              </Link>
            </address>
          ))}
        </fieldset>
      </section>

      <section className="flex border-t py-5 lg:justify-center lg:border-t-0">
        <fieldset className="flex flex-col items-start">
          <legend className="pb-5 text-primary-900">
            <strong>{t("help")}</strong>
          </legend>
          <ul className="flex flex-col gap-3">
            {helpSection.map(({ key, path, translationKey }) => (
              <li key={key}>
                <Link to={path} className="secondary">{t(translationKey)}</Link>
              </li>
            ))}
          </ul>
        </fieldset>
      </section>

      <section className="col-span-full flex flex-col-reverse items-center justify-between border-t py-5 lg:flex-row lg:px-11" style={{ borderLeft: "0px" }}>
        <small className="lg:additional text-[10px]">&copy; {t("copyrightText")}</small>
        <ul className="flex items-center space-x-4">
          {paymentSection.map(({ key, logo, path }) => (
            <li key={key}>
              <Link to={path}>{logo}</Link>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
}

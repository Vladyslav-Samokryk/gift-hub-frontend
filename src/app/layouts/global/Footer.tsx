import { Link } from "react-router-dom";
import type { TRHelp } from "@shared";
import {
  ApplePayLogo,
  EmailLogo,
  GooglePayLogo,
  LocationPointLogo,
  Logo,
  MasterCardLogo,
  TikTokLogo,
  TweeterLogo,
  VisaLogo,
  WhatsAppLogo,
  FacebookLogo,
  InstagramLogo,
} from "@shared";
import { CONTACT_INFO } from "@config";
import { useTranslation } from "react-i18next";

const helpSection: Array<{
  key: string;
  path: PathUnion;
}> = [
  {
    key: "helpSection_1",
    path: "/",
  },
  {
    key: "helpSection_2",
    path: "/",
  },
  {
    key: "helpSection_3",
    path: "/",
  },
  {
    key: "helpSection_4",
    path: "/",
  },
  {
    key: "helpSection_5",
    path: "/",
  },
];

const contactUsSection: Array<{
  key: string;
  path: PathUnion;
  value: string;
  logo: JSX.Element;
}> = [
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

const paymentSection: Array<{
  key: string;
  logo: JSX.Element;
}> = [
  {
    key: "paymentSection_1",
    logo: <VisaLogo />,
  },
  {
    key: "paymentSection_2",
    logo: <MasterCardLogo />,
  },
  {
    key: "paymentSection_3",
    logo: <GooglePayLogo />,
  },
  {
    key: "paymentSection_4",
    logo: <ApplePayLogo />,
  },
];

const followUsSection: Array<{
  key: string;
  path: PathUnion;
  logo: JSX.Element;
}> = [
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

export default function Footer(): JSX.Element {
  const { t } = useTranslation();
  const helpLinks: TRHelp = t("help_section", {
    returnObjects: true,
  });

  return (
    <footer className="divide-gray-400 bg-white px-10 pt-8 font-rubik shadow-main lg:grid lg:grid-cols-3 lg:divide-x lg:px-12">
      <section className="flex flex-col pb-5 lg:items-center">
        <div className="self-center">
          <Logo />
        </div>
        <fieldset className="flex h-max gap-4">
          <legend className="pb-5">
            <strong className="text-blue-900">
              {t("footer_sections.follow_us")}:
            </strong>
          </legend>
          {followUsSection.map(({ key, logo, path }) => (
            <Link key={key} to={path}>
              {logo}
            </Link>
          ))}
        </fieldset>
      </section>

      <section className="grid gap-6 border-t py-5 lg:justify-center lg:border-t-0">
        <fieldset className="flex w-full flex-col gap-4">
          <legend className="pb-5 text-blue-900">
            <strong>{t("footer_sections.contact_us")}:</strong>
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
          <legend className="pb-5 text-blue-900">
            <strong>{t("footer_sections.help")}</strong>
          </legend>
          <ul className="flex flex-col gap-3">
            {helpSection.map(({ key, path }, index: number) => (
              <li key={key}>
                <Link to={path} className="secondary">
                  {Object.values(helpLinks)[index]}
                </Link>
              </li>
            ))}
          </ul>
        </fieldset>
      </section>

      <section
        className="col-span-full flex flex-col-reverse items-center justify-between border-t py-5 lg:flex-row lg:px-11"
        style={{ borderLeft: "0px" }}
      >
        <small className="lg:additional text-[10px]">
          &copy; {t("footer_sections.copyright")}
        </small>
        <ul className="flex items-center space-x-4">
          {paymentSection.map(({ key, logo }) => (
            <li key={key}>{logo}</li>
          ))}
        </ul>
      </section>
    </footer>
  );
}

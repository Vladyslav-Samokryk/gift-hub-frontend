import { useTranslation } from "react-i18next";

import ButtonWithIcon from "shared/UI/Buttons/ButtonWithIcon";
import { FacebookLogin, GoogleLogin } from "shared/assets/svg/SocialMedia";

export default function EnterAsSection(): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative my-5 w-full  md:mx-2 md:h-[90%] md:w-[2px]">
        <div className=" h-[1.5px] w-full bg-gray-900 md:h-full md:w-[1.5px]" />
        <p className="absolute left-1/2 top-[10%] -translate-x-1/2 -translate-y-1/2 bg-white md:top-[97px]">
          {t("or")}
        </p>
      </div>

      <div className="flex flex-col text-center md:mt-5">
        <h5 className="mb-5 md:mb-2">{t("enter_as_header")}</h5>
        <div className="flex w-full flex-col items-center justify-center">
          <ButtonWithIcon
            text="Google"
            onClick={() => {
              ("");
            }}
          >
            <GoogleLogin />
          </ButtonWithIcon>
          <ButtonWithIcon
            text="Facebook"
            onClick={() => {
              ("");
            }}
          >
            <FacebookLogin />
          </ButtonWithIcon>
        </div>
      </div>
    </>
  );
}

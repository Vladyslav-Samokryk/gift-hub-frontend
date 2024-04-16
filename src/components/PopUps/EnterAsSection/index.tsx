import { useTranslation } from "react-i18next";

import ButtonWithIcon from "shared/UI/Buttons/ButtonWithIcon";
import { FacebookLogin, GoogleLogin } from "shared/assets/svg/SocialMedia";
import { useGoogleLogin } from "@react-oauth/google";
import { getTokens } from "app/api/googleLogin";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setIsAuth } from "app/store/slices/user";
import type { ModalDialogProps } from "shared/types/Modals";

type CloseModalWindow= Pick<ModalDialogProps, 'onClose'>;

export default function EnterAsSection({onClose}:CloseModalWindow): JSX.Element {
  const [, setCookie] = useCookies(["refresh", "access"]);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      try {
        const { data } = await getTokens(code);
        console.log("tokens", data);
        setCookie("refresh", data.refresh);
        setCookie("access", data.access);
        dispatch(setIsAuth({ isAuth: true }));
        onClose();
      } catch (err) {
        console.log(err);
      }
    },
    flow: "auth-code",
    onError: (errorResponse) => console.log(errorResponse),
  });
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
              googleLogin();
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

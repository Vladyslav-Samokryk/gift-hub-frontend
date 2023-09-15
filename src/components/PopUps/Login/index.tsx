import { LoginIcon, ModalContainer, useTypedTranslation, InputContainer, ModalHeader, InputPassword } from "@src/shared";
import EnterAsSection from "../EnterAsSection";

interface LoginType {
  error?: boolean;
  visible: boolean;
  setVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export default function LoginPopUp ({ visible, setVisible, error = false }: LoginType): JSX.Element {
  const t = useTypedTranslation();
  return (
    <ModalContainer visible={visible}>
      <ModalHeader title={t("login")} setVisible={setVisible}>
        {error ? <p className="additional text-accent-bOrange">{t("wishlistError")}</p> : null}
      </ModalHeader>

      <div className="grid grid-cols-[2fr_40px_1fr]">

        <div className="mr-5 mt-6 grid grid-cols-1 justify-around gap-6">
          <InputContainer label={t("ph_email")}>
            <input type="email" placeholder=" " className="input"/>
          </InputContainer>

          <InputPassword label={t("ph_password_login")}/>

          <div className="flex justify-between">
            <div className="flex items-center">
              <input id="remember" type="checkbox" className="mr-3 h-5 w-5 accent-green-600"/>
              <label htmlFor="remember">{t("remember_person")}</label>
            </div>
            <a href="#" className="additional text-blue-800 underline">{t("remind_password")}</a>
          </div>
          <div className="m-auto flex flex-col items-center">
            <button className="btn-effect btn">Login</button>
            <a className="additional mt-3 text-link underline">{t("registration")}</a>
          </div>
        </div>

        <EnterAsSection icon={<LoginIcon/>}/>

      </div>

    </ModalContainer>
  );
}

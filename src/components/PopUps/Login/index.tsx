import { LoginIcon, ModalContainer, useTypedTranslation, InputContainer, ModalHeader, InputPassword } from "@src/shared";
import EnterAsSection from "../EnterAsSection";
import { useState } from "react";

interface LoginType {
  error?: boolean;
  visible: boolean;
  setVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
  goToRegistr: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export default function LoginPopUp ({ visible, setVisible, goToRegistr, error = false }: LoginType): JSX.Element {
  const t = useTypedTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ModalContainer visible={visible} setVisible={setVisible}>
      <ModalHeader title={t("login")} setVisible={setVisible}>
        {error ? <p className="additional text-accent-bOrange">{t("wishlistError")}</p> : null}
      </ModalHeader>

      <div className="grid md:grid-cols-[2fr_40px_1fr]">

        <div className="mt-6 grid grid-cols-1 justify-around gap-3 md:mr-5 md:gap-6">
          <div className="grid gap-6">
            <InputContainer label={t("ph_email")} inputValue={email} setInputValue={setEmail}>
              <input type="email" placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)} className="h-full w-full pr-8 focus:outline-none"/>
            </InputContainer>

            <InputPassword label={t("ph_password_login")} password={password} setPassword={setPassword}/>
          </div>

          <div className="flex flex-col-reverse justify-between md:flex-row">
            <div className="flex items-center">
              <input id="remember" type="checkbox" className="mr-3 h-5 w-5 accent-green-600"/>
              <label htmlFor="remember">{t("remember_person")}</label>
            </div>
            <a href="#" className="additional mb-3 text-blue-800 underline md:mb-0">{t("remind_password")}</a>
          </div>
          <div className="m-auto flex flex-col items-center">
            <button className="btn-effect btn">{t("login_btn")}</button>
            <button className="additional mt-3 text-link underline" onClick={() => {
              setVisible(false);
              goToRegistr(true);
            }}>{t("registration")}</button>
          </div>
        </div>

        <EnterAsSection icon={<LoginIcon/>}/>

      </div>

    </ModalContainer>
  );
}

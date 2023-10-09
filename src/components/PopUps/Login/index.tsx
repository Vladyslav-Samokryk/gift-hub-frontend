import {
  LoginIcon,
  ModalContainer,
  InputContainer,
  ModalHeader,
  InputPassword,
} from "@src/shared";
import EnterAsSection from "../EnterAsSection";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface LoginType {
  error?: boolean;
  visible: boolean;
  setVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
  goToRegistr: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export default function LoginPopUp({
  visible,
  setVisible,
  goToRegistr,
  error = false,
}: LoginType): JSX.Element {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ModalContainer visible={visible} setVisible={setVisible}>
      <ModalHeader title={t("login_popup.header")} setVisible={setVisible}>
        {error ? (
          <p className="additional text-accent-bOrange">
            {t("login_popup.wishlist_error")}
          </p>
        ) : null}
      </ModalHeader>

      <div className="grid md:grid-cols-[2fr_40px_1fr]">
        <div className="mt-6 grid grid-cols-1 justify-around gap-3 md:mr-5 md:gap-6">
          <div className="grid gap-6">
            <InputContainer
              label={t("ph_email")}
              inputValue={email}
              setInputValue={setEmail}
            >
              <input
                type="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-full w-full pr-8 focus:outline-none"
              />
            </InputContainer>

            <InputPassword
              label={t("input_password.ph")}
              password={password}
              setPassword={setPassword}
            />
          </div>

          <div className="flex flex-col-reverse justify-between md:flex-row">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="mr-3 h-5 w-5 accent-green-600"
              />
              <label htmlFor="remember">{t("checkbox_remember_person")}</label>
            </div>
            <a
              href="#"
              className="additional mb-3 text-blue-800 underline md:mb-0"
            >
              {t("input_password.remind_password")}
            </a>
          </div>
          <div className="m-auto flex flex-col items-center">
            <button className="btn-effect btn">{t("login_popup.btn")}</button>
            <button
              className="additional mt-3 text-blue-600 underline"
              onClick={() => {
                setVisible(false);
                goToRegistr(true);
              }}
            >
              {t("registr_popup.header")}
            </button>
          </div>
        </div>

        <EnterAsSection icon={<LoginIcon />} />
      </div>
    </ModalContainer>
  );
}

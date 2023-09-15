import { Close, LoginIcon, ModalContainer, PasswordShow, PasswordHide, useTypedTranslation, InputContainer } from "@src/shared";
import classNames from "classnames";
import React, { useState } from "react";

interface LoginType {
  error?: boolean;
  visible: boolean;
  setVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export default function LoginPopUp ({ visible, setVisible, error = false }: LoginType): JSX.Element {
  const t = useTypedTranslation();
  const [inputType, setInputType] = useState<"password" | "text">("password");
  return (
    <ModalContainer visible={visible}>
      <div className="px-7 py-3">
        <div className='flex items-center justify-between pb-1'>
          <h2 className="text-3xl">{t("login")}</h2>
          {error && <p className="additional text-accent-bOrange">{t("wishlistError")}</p>
          }
          <button onClick={() => setVisible(prev => !prev)}>
            <Close/>
          </button>
        </div>
        <hr className="h-[2px] bg-gray-900"/>
        <div className="grid grid-cols-[2fr_40px_1fr]">

          <div className="mr-5 mt-6 grid grid-cols-1 justify-around gap-6">
            <InputContainer label={t("ph_email")}>
              <input type="email" placeholder=" " className="input"/>
            </InputContainer>

            <InputContainer label={t("ph_password_login")}>
              <input type={inputType} placeholder=" " className="input mr-3 w-[80%]" required/>
              <button onClick={() => setInputType(prev => prev === "password" ? "text" : "password")}>
                {inputType === "password" ? <PasswordHide/> : <PasswordShow/>}
              </button>
            </InputContainer>

            <div className="flex justify-between">
              <div className="flex items-center">
                <input id="remember" type="checkbox" className="mr-3 h-5 w-5 accent-green-600"/>
                <label htmlFor="remember">{t("remember_person")}</label>
              </div>
              <a href="#" className="additional text-blue-800 underline">{t("remind_password")}</a>
            </div>
            <div className="m-auto flex flex-col items-center">
              <button className="btn-effect w-max rounded-sm bg-blue-700 px-8 py-1 text-xl font-semibold text-white">Login</button>
              <a href="#" className="additional mt-3 text-link underline">{t("registration")}</a>

            </div>
          </div>

          <div className="relative mx-2 h-[90%] w-[2px] py-5">
            <div className="h-full w-[1.5px] bg-gray-900"/>
            <p className="absolute top-[30%] -translate-x-1/2 bg-white">{t("or")}</p>
          </div>

          <div className="mt-6">
            <h5>{t("enter_as")}</h5>
            <button>Google</button>
            <button>Facebook</button>

            <LoginIcon/>
          </div>

        </div>

      </div>

    </ModalContainer>
  );
}

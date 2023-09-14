import { Close, LoginIcon, ModalContainer, PasswordShow, PasswordHide, useTypedTranslation } from "@src/shared";
import classNames from "classnames";
import React from "react";

interface LoginType {
  error?: boolean;
  visible: boolean;
  setVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export default function LoginPopUp ({ visible, setVisible, error = false }: LoginType): JSX.Element {
  const t = useTypedTranslation();
  return (
    <ModalContainer visible={visible}>
      <div className="px-7 py-3">
        <div className='flex items-center justify-between pb-1'>
          <h2 className="text-3xl">{t("login")}</h2>
          {error && <p className="aditional text-accent-bOrange">{t("wishlistError")}</p>
          }
          <button onClick={() => setVisible(prev => !prev)}>
            <Close/>
          </button>
        </div>
        <hr className="h-[2px] bg-gray-900"/>
        <div className="grid grid-cols-[2fr_40px_1fr]">

          <div className="mr-5 mt-6 grid grid-cols-1 justify-around gap-6">
            <input type="email" placeholder={t("ph_email")} className="rounded-sm border-2 border-gray-900 px-2 py-1 focus:outline-none"/>
            <div className="flex items-center">
              <input type="password" placeholder={t("ph_password_login")} className="mr-3 w-[80%] rounded-sm border-2 border-gray-900 px-2 py-1 focus:outline-none"/>
              <PasswordShow/>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center">
                <input id="remember" type="checkbox" className="mr-3 h-5 w-5 accent-green-600"/>
                <label htmlFor="remember">{t("remember_person")}</label>
              </div>
              <a href="#" className="aditional text-blue-800 underline">{t("remind_password")}</a>
            </div>
            <div className="m-auto flex flex-col items-center">
              <button className="btn-effect w-max rounded-sm bg-blue-700 px-8 py-1 text-xl font-semibold text-white">Login</button>
              <a href="#" className="aditional mt-3 text-link underline">{t("registration")}</a>

            </div>
          </div>

          <div className="relative mx-2 h-[90%] w-[2px] py-5">
            <div className="h-full w-[1.5px] bg-gray-900"/>
            <p className="absolute top-[30%] -translate-x-1/2 bg-white">{t("or")}</p>
          </div>

          <div className="mt-6">
            <h5>Enter as</h5>
            <button>Google</button>
            <button>Facebook</button>

            <LoginIcon/>
          </div>

        </div>

      </div>

    </ModalContainer>
  );
}

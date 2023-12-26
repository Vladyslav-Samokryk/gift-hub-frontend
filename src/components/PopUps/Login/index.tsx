import EnterAsSection from "components/PopUps/EnterAsSection";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useModals } from "app/context/modalContext/useModals";
import { MODALS } from "app/context/modalContext/modals";
import type { ModalDialogProps } from "shared/types/Modals";
import Checkbox from "shared/UI/Checkbox";
import InputContainer from "shared/UI/InputContainer";
import InputPassword from "shared/UI/InputPassword";
import ModalContainer from "shared/UI/ModalContainer";
import ModalHeader from "shared/UI/ModalHeader";

export default function LoginPopUp({
  isOpen,
  onClose,
  data,
}: ModalDialogProps): JSX.Element {
  const { onOpen } = useModals();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ModalContainer visible={isOpen} onClose={onClose} top={100}>
      <ModalHeader title={t("login_popup.header")} onClose={onClose}>
        {data?.error ? (
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
            <Checkbox title={t("checkbox_remember_person")} />
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
                if (onClose) {
                  onClose();
                  onOpen({ name: MODALS.REGISTR });
                }
              }}
            >
              {t("registr_popup.header")}
            </button>
          </div>
        </div>

        <EnterAsSection />
      </div>
    </ModalContainer>
  );
}

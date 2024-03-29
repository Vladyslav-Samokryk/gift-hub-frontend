import EnterAsSection from "components/PopUps/EnterAsSection";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { ModalDialogProps } from "shared/types/Modals";
import InputContainer from "shared/UI/InputContainer";
import InputPassword from "shared/UI/InputPassword";
import ModalContainer from "shared/UI/ModalContainer";
import ModalHeader from "shared/UI/ModalHeader";

export default function RegistrationPopUp({
  isOpen,
  onClose,
}: ModalDialogProps): JSX.Element {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordTry, setPasswordTry] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ModalContainer visible={isOpen} onClose={onClose} top={30}>
      <ModalHeader title={t("registr_popup.header")} onClose={onClose} />

      <div className="grid md:grid-cols-[2fr_40px_1fr] lg:w-[40vw]">
        <div className="mt-6 grid grid-cols-1 justify-around gap-4 md:mr-5 md:gap-8">
          <InputContainer
            label={t("person.name")}
            inputValue={name}
            setInputValue={setName}
          >
            <input
              type="text"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-full w-full pr-8 focus:outline-none"
            />
          </InputContainer>

          <InputContainer
            label={t("person.last_name")}
            inputValue={lastName}
            setInputValue={setLastName}
          >
            <input
              type="text"
              placeholder=" "
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="h-full w-full pr-8 focus:outline-none"
            />
          </InputContainer>

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

          <div>
            <InputPassword
              label={t("input_password.ph_create")}
              password={passwordTry}
              setPassword={setPasswordTry}
            />
            <ol className="ml-5 mt-1 list-disc font-rubik text-[12px] font-light text-gray-900">
              {Array.from({ length: 4 }).map((_, index) => (
                <li key={index}>{t("input_password.rules")[index]}</li>
              ))}
            </ol>
          </div>

          <InputPassword
            label={t("input_password.ph_repeat")}
            password={password}
            setPassword={setPassword}
          />

          <button className="btn-effect btn m-auto">
            {t("registr_popup.btn")}
          </button>
          <span className="text-gray-900">
            By registering, you are up to date with the regulations{" "}
            <Link
              to="/privacy-policy"
              className="text-blue-600"
              onClick={onClose}
            >
              regarding the processing and protection of personal data
            </Link>{" "}
            for{" "}
            <Link
              to="/privacy-policy"
              className="text-blue-600"
              onClick={onClose}
            >
              the benefit of the client.
            </Link>
          </span>
        </div>

        <EnterAsSection />
      </div>
    </ModalContainer>
  );
}

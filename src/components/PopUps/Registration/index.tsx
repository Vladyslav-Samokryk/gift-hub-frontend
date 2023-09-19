import { InputContainer, InputPassword, ModalContainer, ModalHeader, RegistrationIcon, useTypedTranslation } from "@src/shared";
import EnterAsSection from "../EnterAsSection";
import { useState } from "react";

interface RegistrType {
  visible: boolean;
  setVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export default function RegistrationPopUp ({ visible, setVisible }: RegistrType): JSX.Element {
  const t = useTypedTranslation();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordTry, setPasswordTry] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ModalContainer visible={visible}>
      <ModalHeader title={t("registration")} setVisible={setVisible}/>

      <div className="grid grid-cols-[2fr_40px_1fr]">
        <div className="mr-5 mt-6 grid grid-cols-1 justify-around gap-8">
          <InputContainer label={t("person_name")} inputValue={name} setInputValue={setName}>
            <input type="text" placeholder=" " value={name} onChange={(e) => setName(e.target.value)} className="h-full w-full pr-8 focus:outline-none"/>
          </InputContainer>

          <InputContainer label={t("person_lastName")} inputValue={lastName} setInputValue={setLastName}>
            <input type="text" placeholder=" " value={lastName} onChange={(e) => setLastName(e.target.value)} className="h-full w-full pr-8 focus:outline-none"/>
          </InputContainer>

          <InputContainer label={t("ph_email")} inputValue={email} setInputValue={setEmail}>
            <input type="email" placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)} className="h-full w-full pr-8 focus:outline-none"/>
          </InputContainer>

          <div>
            <InputPassword label={t("ph_password_registr.0")} password={passwordTry} setPassword={setPasswordTry}/>
            <ol className="ml-5 mt-1 list-disc font-rubik text-[12px] font-light text-gray-900">
              <li>{t("password_require.0")}</li>
              <li>{t("password_require.1")}</li>
              <li>{t("password_require.2")}</li>
              <li>{t("password_require.3")}</li>
            </ol>
          </div>

          <InputPassword label={t("ph_password_registr.1")} password={password} setPassword={setPassword}/>

          <button className="btn-effect btn m-auto">{t("registration_btn")}</button>
        </div>
        <EnterAsSection icon={<RegistrationIcon/>}/>
      </div>

    </ModalContainer>
  );
}

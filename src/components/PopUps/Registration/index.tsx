import { InputContainer, InputPassword, ModalContainer, ModalHeader, RegistrationIcon, useTypedTranslation } from "@src/shared";
import EnterAsSection from "../EnterAsSection";

interface RegistrType {
  visible: boolean;
  setVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export default function RegistrationPopUp ({ visible, setVisible }: RegistrType): JSX.Element {
  const t = useTypedTranslation();
  return (
    <ModalContainer visible={visible}>
      <ModalHeader title={t("registration")} setVisible={setVisible}/>

      <div className="grid grid-cols-[2fr_40px_1fr]">
        <div className="mr-5 mt-6 grid grid-cols-1 justify-around gap-8">
          <InputContainer label={t("person_name")}>
            <input type="text" placeholder=" " className="input"/>
          </InputContainer>

          <InputContainer label={t("person_lastName")} >
            <input type="text" placeholder=" " className="input"/>
          </InputContainer>

          <InputContainer label={t("ph_email")}>
            <input type="email" placeholder=" " className="input"/>
          </InputContainer>

          <div>
            <InputPassword label={t("ph_password_registr.0")}/>
            <ol className="ml-5 mt-1 list-disc font-rubik text-[12px] font-light text-gray-900">
              <li>{t("password_require.0")}</li>
              <li>{t("password_require.1")}</li>
              <li>{t("password_require.2")}</li>
              <li>{t("password_require.3")}</li>
            </ol>
          </div>

          <InputPassword label={t("ph_password_registr.1")}/>

          <button className="btn-effect btn m-auto">{t("registration_btn")}</button>
        </div>
        <EnterAsSection icon={<RegistrationIcon/>}/>
      </div>

    </ModalContainer>
  );
}

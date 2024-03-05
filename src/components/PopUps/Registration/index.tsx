/* eslint-disable @typescript-eslint/no-misused-promises */
import EnterAsSection from "components/PopUps/EnterAsSection";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { ModalDialogProps } from "shared/types/Modals";
import ModalContainer from "shared/UI/ModalContainer";
import ModalHeader from "shared/UI/ModalHeader";
import { Formik, Form } from "formik";
import { RegistrSchema } from "shared/helpers/authFormValidate";
import type { RegistrValue } from "shared/types/Auth";
import FormikInput from "shared/UI/FormikInput";
import FormikPasswordInput from "shared/UI/FormikPassportInput";
import { MODALS } from "app/context/modalContext/modals";
import { useModals } from "app/context/modalContext/useModals";
import { useRegistrationMutation } from "app/api/auth";

export default function RegistrationPopUp({
  isOpen,
  onClose,
}: ModalDialogProps): JSX.Element {
  const { t } = useTranslation();
  const { onOpen } = useModals();
  const [registration] = useRegistrationMutation();

  return (
    <ModalContainer visible={isOpen} onClose={onClose} top={30}>
      <ModalHeader title={t("registr_popup.header")} onClose={onClose} />

      <div className="grid md:grid-cols-[2fr_40px_1fr] lg:w-[40vw]">
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            passwordTry: "",
            password: "",
          }}
          validationSchema={RegistrSchema}
          onSubmit={async (values: RegistrValue) => {
            await registration(values)
              .then(() => {
                if (onClose) {
                  onClose();
                  onOpen({ name: MODALS.LOGIN });
                }
              })
              .catch((e) => console.log(e));
          }}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form className="mt-6 flex flex-col justify-around gap-4 md:mr-5 md:gap-6">
              <FormikInput
                value={values.first_name}
                setFieldValue={setFieldValue}
                name="first_name"
                label={t("person.name")}
                isError={!!errors.first_name && touched.first_name}
                errorMessage={errors.first_name}
              />

              <FormikInput
                value={values.last_name}
                setFieldValue={setFieldValue}
                name="last_name"
                label={t("person.last_name")}
                isError={!!errors.last_name && touched.last_name}
                errorMessage={errors.last_name}
              />

              <FormikInput
                value={values.email}
                setFieldValue={setFieldValue}
                name="email"
                label={t("ph_email")}
                isError={!!errors.email && touched.email}
                errorMessage={errors.email}
              />

              <FormikPasswordInput
                value={values.password}
                setFieldValue={setFieldValue}
                name="password"
                isError={!!errors.password && touched.password}
                errorMessage={errors.password}
                label={t("input_password.ph_create")}
              />

              <FormikPasswordInput
                label={t("input_password.ph_repeat")}
                name="passwordTry"
                value={values.passwordTry}
                setFieldValue={setFieldValue}
                isError={!!errors.passwordTry && touched.passwordTry}
                errorMessage={errors.passwordTry}
              />

              <button type="submit" className="btn-effect btn m-auto">
                {t("registr_popup.btn")}
              </button>

              <span className="text-gray-900">
                {t("registr_popup.register")}
                <Link
                  to="/privacy-policy"
                  className="text-blue-600"
                  onClick={onClose}
                >
                  {t("registr_popup.privacy_policy")}
                </Link>
                {t("registr_popup.split")}
                <Link
                  to="/privacy-policy"
                  className="text-blue-600"
                  onClick={onClose}
                >
                  {t("registr_popup.benefit")}
                </Link>
              </span>
            </Form>
          )}
        </Formik>

        <EnterAsSection />
      </div>
    </ModalContainer>
  );
}

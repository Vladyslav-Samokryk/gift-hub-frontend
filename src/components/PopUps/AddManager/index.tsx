/* eslint-disable @typescript-eslint/no-misused-promises */
import { MODALS } from "app/context/modalContext/modals";
import { useModals } from "app/context/modalContext/useModals";
import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import FormikInput from "shared/UI/FormikInput";
import FormikPasswordInput from "shared/UI/FormikPassportInput";
import ModalContainer from "shared/UI/ModalContainer";
import ModalHeader from "shared/UI/ModalHeader";
import { AddManagerSchema } from "shared/helpers/addManagerFormValidate";
import type { AddManagerValue } from "shared/types/Admin";
import type { ModalDialogProps } from "shared/types/Modals";

const AddManagerPopUp = ({
  isOpen,
  onClose,
  data,
}: ModalDialogProps): JSX.Element => {
  const { t } = useTranslation();
  const { onOpen } = useModals();

  return (
    <ModalContainer visible={isOpen} onClose={onClose} top={100}>
      <ModalHeader title={t("cabinet_popup_header")} onClose={onClose} />
      <div className="mt-5">
        <Formik
          initialValues={{
            login: "",
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={AddManagerSchema}
          onSubmit={async (values: AddManagerValue) => {
            if (data?.onAdd) {
              data?.onAdd(values);
              if (onClose) {
                onClose();
              }
              onOpen({
                name: MODALS.PUSH,
                data: {
                  variant: "success",
                  message: t("push_notifications.success.default"),
                },
              });
            }
          }}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form className="mt-6 flex flex-col justify-around gap-3 md:mr-5 md:gap-6">
              <FormikInput
                label={t("ph_name")}
                type="text"
                value={values.name}
                setFieldValue={setFieldValue}
                isError={!!errors.name && touched.name}
                errorMessage={errors.name}
                name="name"
              />

              <FormikInput
                label={t("ph_email")}
                type="email"
                value={values.email}
                setFieldValue={setFieldValue}
                isError={!!errors.email && touched.email}
                errorMessage={errors.email}
                name="email"
              />

              <FormikInput
                label={t("ph_login")}
                type="text"
                value={values.login}
                setFieldValue={setFieldValue}
                isError={!!errors.login && touched.login}
                errorMessage={errors.login}
                name="login"
              />

              <FormikPasswordInput
                name="password"
                label={t("input_password.ph")}
                value={values.password}
                setFieldValue={setFieldValue}
                isError={!!errors.password && touched.password}
                errorMessage={errors.password}
              />
              <button type="submit" className="btn-effect btn">
                {t("btn_add_manager")}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </ModalContainer>
  );
};

export default AddManagerPopUp;

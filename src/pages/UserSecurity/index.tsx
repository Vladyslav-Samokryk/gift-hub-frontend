/* eslint-disable @typescript-eslint/no-misused-promises */
import type { ChangePasswordRequest } from "app/api/user";
import { useChangePasswordMutation } from "app/api/user";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import FormikPasswordInput from "shared/UI/FormikPassportInput";
import { ChangePasswordSchema } from "shared/helpers/changePasswordFormValidation";

interface UserSecurityValues extends ChangePasswordRequest {
  new_password_try: string;
}

export default function UserSecurityPage(): JSX.Element {
  const { t } = useTranslation();
  const [isDisable, setIsDisable] = useState(true);
  const [changePassword, { error }] = useChangePasswordMutation();
  const [cookies] = useCookies();

  return (
    <Formik
      initialValues={{
        current_password: "",
        new_password: "",
        new_password_try: "",
      }}
      validationSchema={ChangePasswordSchema}
      onSubmit={async ({
        current_password,
        new_password,
      }: UserSecurityValues) => {
        await changePassword({
          current_password,
          new_password,
          token: cookies.access,
        });
      }}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form className="my-5 flex flex-col gap-8 px-[5vw] md:px-[15vw]">
          {error && (
            <p className="text-accent-red">
              {t(
                "status" in error && error.status === 400
                  ? "err_400_change_password"
                  : "err_500",
              )}
            </p>
          )}
          <FormikPasswordInput
            value={values.current_password}
            setFieldValue={setFieldValue}
            label={t("input_password.ph_current")}
            isError={!!errors.current_password && touched.current_password}
            errorMessage={errors.current_password}
            name="current_password"
            isDisable={isDisable}
          ></FormikPasswordInput>
          <FormikPasswordInput
            value={values.new_password}
            setFieldValue={setFieldValue}
            label={t("input_password.ph_create")}
            isError={!!errors.new_password && touched.new_password}
            errorMessage={errors.new_password}
            name="new_password"
            isDisable={isDisable}
          ></FormikPasswordInput>
          <FormikPasswordInput
            value={values.new_password_try}
            setFieldValue={setFieldValue}
            label={t("input_password.ph_repeat")}
            isError={!!errors.new_password_try && touched.new_password_try}
            errorMessage={errors.new_password_try}
            name="new_password_try"
            isDisable={isDisable}
          ></FormikPasswordInput>
          <button type="submit" className="btn-effect btn m-auto">
            {t("registr_popup.btn")}
          </button>
        </Form>
      )}
    </Formik>
  );
}

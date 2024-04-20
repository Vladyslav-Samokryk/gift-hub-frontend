/* eslint-disable @typescript-eslint/no-misused-promises */
import { useChangePasswordMutation } from "app/api/user";
import classNames from "classnames";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import FormikPasswordInput from "shared/UI/FormikPassportInput";
import {
  ChangePasswordSchema,
  ChangePasswordStableSchema,
} from "shared/helpers/changePasswordFormValidation";

const initialValues = {
  current_password: "",
  new_password: "",
  new_password_try: "",
};

export default function UserSecurityPage(): JSX.Element {
  const { t } = useTranslation();
  const [isDisable, setIsDisable] = useState(true);
  const [changePassword, { error }] = useChangePasswordMutation();
  const [cookies] = useCookies();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={
        isDisable ? ChangePasswordStableSchema : ChangePasswordSchema
      }
      onSubmit={(values) => {
        setIsDisable(false);
        if (!isDisable) {
          void changePassword({
            current_password: values.current_password,
            new_password: values.new_password,
            token: cookies.access,
          })
            .unwrap()
            .then(() => {
              setIsDisable(true);
            })
            .catch(() => {
              setIsDisable(false);
            });
        }
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

          <button
            className={classNames(
              "btn mx-auto border-blue-700 border-2 hover:border-blue-800",
              {
                "text-blue-700 bg-white hover:text-blue-800": isDisable,
                "btn-effect": !isDisable,
              },
            )}
            type="submit"
          >
            {t(isDisable ? "btn_edit" : "btn_save")}
          </button>
        </Form>
      )}
    </Formik>
  );
}

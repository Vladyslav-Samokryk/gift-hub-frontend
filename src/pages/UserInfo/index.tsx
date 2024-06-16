/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  useGetUserInfoQuery,
  usePatchUserInfoMutation,
} from "app/api/authUser";
import classNames from "classnames";
import { Formik, Form } from "formik";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import FormikInput from "shared/UI/FormikInput";
import { UserInfoSchema } from "shared/helpers/userInfoForm";

function UserInfoPage(): JSX.Element {
  const [cookies] = useCookies();
  const { data } = useGetUserInfoQuery(cookies.access);
  const [patchUserInfo] = usePatchUserInfoMutation();
  const [isDisable, setIsDisabled] = useState(true);

  const { t } = useTranslation();

  return (
    <>
      {data && (
        <Formik
          initialValues={data}
          validationSchema={UserInfoSchema}
          onSubmit={(values) => {
            if (!isDisable) {
              void patchUserInfo({
                token: cookies.access,
                user: { ...values, dob: values.dob !== "" ? values.dob : null },
              })
                .unwrap()
                .then(() => {
                  setIsDisabled((prev) => !prev);
                })
                .catch(() => setIsDisabled(false));
            } else {
              setIsDisabled(false);
            }
          }}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form className="flex w-full flex-col">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <FormikInput
                  value={values.last_name}
                  setFieldValue={setFieldValue}
                  label={t("checkout.ph.surname")}
                  name="last_name"
                  isError={!!errors.last_name && touched.last_name}
                  errorMessage={errors.last_name}
                  disabled={isDisable}
                ></FormikInput>

                <FormikInput
                  value={values.first_name}
                  setFieldValue={setFieldValue}
                  label={t("checkout.ph.name")}
                  name="first_name"
                  isError={!!errors.first_name && touched.first_name}
                  errorMessage={errors.first_name}
                  disabled={isDisable}
                ></FormikInput>

                <FormikInput
                  value={values.email}
                  setFieldValue={setFieldValue}
                  label={t("checkout.ph.email")}
                  name="email"
                  isError={!!errors.email && touched.email}
                  errorMessage={errors.email}
                  disabled={isDisable}
                ></FormikInput>

                <FormikInput
                  value={values.mobile ?? ""}
                  setFieldValue={setFieldValue}
                  label={t("checkout.ph.tel")}
                  name="mobile"
                  type="tel"
                  isError={!!errors.mobile && touched.mobile}
                  errorMessage={errors.mobile}
                  disabled={isDisable}
                />

                <FormikInput
                  value={(values.dob ?? "").toString()}
                  setFieldValue={setFieldValue}
                  label={t("ph_birthday")}
                  name="dob"
                  isError={!!errors.dob && !!touched.dob}
                  errorMessage={errors.dob as string}
                  disabled={isDisable}
                ></FormikInput>
              </div>
              <button
                className={classNames(
                  "btn mx-auto mt-5 border-blue-700 border-2 hover:border-blue-800",
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
      )}
    </>
  );
}

export default UserInfoPage;

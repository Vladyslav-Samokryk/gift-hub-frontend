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
import { UserAddressSchema } from "shared/helpers/userAddressForm";

export default function UserAddressPage(): JSX.Element {
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
          validationSchema={UserAddressSchema}
          onSubmit={(values) => {
            if (!isDisable) {
              void patchUserInfo({ token: cookies.access, user: values })
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
              <div className="flex flex-col gap-10">
                <div>
                  <h2 className="h6 text-blue-900">
                    {t("checkout.section.delivery.nova_poshta")}
                  </h2>
                  <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <FormikInput
                      value={values.novaPoshta.town}
                      setFieldValue={setFieldValue}
                      label={t("checkout.ph.town")}
                      name="novaPoshta.town"
                      isError={
                        !!errors?.novaPoshta?.town && touched?.novaPoshta?.town
                      }
                      errorMessage={errors?.novaPoshta?.town}
                      disabled={isDisable}
                    ></FormikInput>

                    <FormikInput
                      value={values.novaPoshta.postOffice}
                      setFieldValue={setFieldValue}
                      label={t("checkout.ph.office")}
                      name="novaPoshta.postOffice"
                      isError={
                        !!errors?.novaPoshta?.postOffice &&
                        touched?.novaPoshta?.postOffice
                      }
                      type="number"
                      errorMessage={errors?.novaPoshta?.postOffice}
                      disabled={isDisable}
                    ></FormikInput>
                  </div>
                </div>

                <div>
                  <h2 className="h6 text-blue-900">
                    {t("checkout.section.delivery.ukr_poshta")}
                  </h2>
                  <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <FormikInput
                      value={values.ukrPoshta.town}
                      setFieldValue={setFieldValue}
                      label={t("checkout.ph.town")}
                      name="ukrPoshta.town"
                      isError={
                        !!errors?.ukrPoshta?.town && touched?.ukrPoshta?.town
                      }
                      errorMessage={errors?.ukrPoshta?.town}
                      disabled={isDisable}
                    ></FormikInput>

                    <FormikInput
                      value={values.ukrPoshta.postOffice}
                      setFieldValue={setFieldValue}
                      label={t("checkout.ph.office")}
                      name="ukrPoshta.postOffice"
                      type="number"
                      isError={
                        !!errors?.ukrPoshta?.postOffice &&
                        touched?.ukrPoshta?.postOffice
                      }
                      errorMessage={errors?.ukrPoshta?.postOffice}
                      disabled={isDisable}
                    />
                  </div>
                </div>
                <div>
                  <h2 className="h6 text-blue-900">{t("courier_address")}</h2>
                  <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <FormikInput
                      value={values.address.town}
                      setFieldValue={setFieldValue}
                      label={t("checkout.ph.town")}
                      name="address.town"
                      isError={
                        !!errors?.address?.town && touched?.address?.town
                      }
                      errorMessage={errors?.address?.town}
                      disabled={isDisable}
                    ></FormikInput>

                    <FormikInput
                      value={values.address.street}
                      setFieldValue={setFieldValue}
                      label={t("checkout.ph.address")}
                      name="address.street"
                      isError={
                        !!errors?.address?.street && touched?.address?.street
                      }
                      errorMessage={errors?.address?.street}
                      disabled={isDisable}
                    ></FormikInput>
                    <div className="grid grid-cols-2 gap-5">
                      <FormikInput
                        value={values.address.building}
                        setFieldValue={setFieldValue}
                        label={t("checkout.ph.building")}
                        name="address.building"
                        isError={
                          !!errors?.address?.building &&
                          touched?.address?.building
                        }
                        errorMessage={errors?.address?.building}
                        disabled={isDisable}
                      ></FormikInput>

                      <FormikInput
                        value={values.address.flat}
                        setFieldValue={setFieldValue}
                        label={t("checkout.ph.flat")}
                        name="address.flat"
                        isError={
                          !!errors?.address?.flat && touched?.address?.flat
                        }
                        errorMessage={errors?.address?.flat}
                        disabled={isDisable}
                      ></FormikInput>
                    </div>
                  </div>
                </div>
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

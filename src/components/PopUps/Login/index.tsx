/* eslint-disable @typescript-eslint/no-misused-promises */
import { useTranslation } from "react-i18next";
import { useModals } from "app/context/modalContext/useModals";
import { MODALS } from "app/context/modalContext/modals";
import type { ModalDialogProps } from "shared/types/Modals";
import Checkbox from "shared/UI/Checkbox";
import ModalContainer from "shared/UI/ModalContainer";
import ModalHeader from "shared/UI/ModalHeader";
import { Form, Formik } from "formik";
import { LoginSchema } from "shared/helpers/authFormValidate";
import type { LoginValue } from "shared/types/Auth";
import { useLoginMutation } from "app/api/auth";
import FormikInput from "shared/UI/FormikInput";
import FormikPasswordInput from "shared/UI/FormikPassportInput";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setIsAuth } from "app/store/slices/user";
import EnterAsSection from "../EnterAsSection";

export default function LoginPopUp({
  isOpen,
  onClose,
  data,
}: ModalDialogProps): JSX.Element {
  const { onOpen } = useModals();
  const { t } = useTranslation();
  const [login, { error }] = useLoginMutation();
  const [isSavedUser, setIsSavedUser] = useState(true);
  const [, setCookie] = useCookies(["refresh", "access"]);
  const dispatch = useDispatch();

  return (
    <ModalContainer visible={isOpen} onClose={onClose} top={100}>
      <ModalHeader title={t("login_popup.header")} onClose={onClose} />
      {data?.error ? (
        <p className="additional text-accent-bOrange">
          {t("login_popup.wishlist_error")}
        </p>
      ) : (
        <></>
      )}
      {error ? (
        <p className="additional text-accent-red">
          {t("login_popup.login_error")}
        </p>
      ) : (
        <></>
      )}
      <div className="grid md:grid-cols-[2fr_40px_1fr]">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={async (values: LoginValue) => {
            await login(values)
              .unwrap()
              .then((data) => {
                setCookie("refresh", data.refresh);
                setCookie("access", data.access);
                dispatch(setIsAuth({ isAuth: true }));
                onOpen({
                  name: MODALS.PUSH,
                  data: {
                    variant: "success",
                    message: t("push_notifications.success.default"),
                  },
                });
              })
              .catch((e) =>  onOpen({
                  name: MODALS.PUSH,
                  data: {
                    variant: "error",
                    message: t("push_notifications.error.default"),
                  },
                }));
          }}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form className="mt-6 flex flex-col justify-around gap-3 md:mr-5 md:gap-6">
              <FormikInput
                label={t("ph_email")}
                type="email"
                value={values.email}
                setFieldValue={setFieldValue}
                isError={!!errors.email && touched.email}
                errorMessage={errors.email}
                name="email"
              />

              <FormikPasswordInput
                name="password"
                label={t("input_password.ph")}
                value={values.password}
                setFieldValue={setFieldValue}
                isError={!!errors.password && touched.password}
                errorMessage={errors.password}
              />

              <div className="flex flex-col-reverse justify-between md:flex-row">
                <Checkbox
                  title={t("checkbox_remember_person")}
                  id="remember_person"
                  checked={isSavedUser}
                  onChange={() => setIsSavedUser((prev) => !prev)}
                />
                <a
                  href="#"
                  className="additional mb-3 text-blue-800 underline md:mb-0"
                >
                  {t("input_password.remind_password")}
                </a>
              </div>
              <div className="m-auto flex flex-col items-center">
                <button type="submit" className="btn-effect btn">
                  {t("login_popup.btn")}
                </button>
                <button
                  type="button"
                  className="additional mt-3 text-blue-600 underline"
                  onClick={() => {
                    if (onClose) {
                      onClose();
                      onOpen({
                        name: MODALS.REGISTR,
                      });
                    }
                  }}
                >
                  {t("registr_popup.header")}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <EnterAsSection/>
      </div>
    </ModalContainer>
  );
}

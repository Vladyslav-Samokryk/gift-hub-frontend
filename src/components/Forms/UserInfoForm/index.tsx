/* eslint-disable @typescript-eslint/no-misused-promises */
import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import FormikInput from "shared/UI/FormikInput";
import { UserInfoSchema } from "shared/helpers/userInfoForm";

interface UserInfoFormProps {
  isDisable: boolean;
  userInfo: UserPersonalInfo;
}

interface UserPersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  birthday: Date;
  tel: string;
}

export default function UserInfoForm({
  isDisable,
  userInfo,
}: UserInfoFormProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={userInfo}
      validationSchema={UserInfoSchema}
      onSubmit={() => console.log(userInfo)}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form className="grid grid-cols-1 md:grid-cols-2">
          <FormikInput
            value={values.lastName}
            setFieldValue={setFieldValue}
            label={t("checkout.ph.surname")}
            name="lastName"
            isError={!!errors.lastName && touched.lastName}
            errorMessage={errors.lastName}
            disabled={isDisable}
          ></FormikInput>

          <FormikInput
            value={values.firstName}
            setFieldValue={setFieldValue}
            label={t("checkout.ph.name")}
            name="firstName"
            isError={!!errors.firstName && touched.firstName}
            errorMessage={errors.firstName}
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
            value={values.tel}
            setFieldValue={setFieldValue}
            label={t("checkout.ph.tel")}
            name="tel"
            type="tel"
            isError={!!errors.tel && touched.tel}
            errorMessage={errors.tel}
            disabled={isDisable}
          />

          <FormikInput
            value={values.birthday.toString()}
            setFieldValue={setFieldValue}
            label={t("ph_birthday")}
            name="birthday"
            isError={!!errors.birthday && !!touched.birthday}
            errorMessage={errors.birthday as string}
            disabled={isDisable}
          ></FormikInput>
        </Form>
      )}
    </Formik>
  );
}

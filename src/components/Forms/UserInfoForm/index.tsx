/* eslint-disable @typescript-eslint/no-misused-promises */
import { Form, Formik } from "formik";
import FormikInput from "shared/UI/FormikInput";

interface UserInfoFormProps {
  mode: "Edit" | "Block";
  userInfo: UserPersonalInfo;
}

interface UserPersonalInfo {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  birthday: Date;
}

export default function UserInfoForm({
  mode,
  userInfo,
}: UserInfoFormProps): JSX.Element {
  return (
    <Formik initialValues={userInfo} onSubmit={() => console.log(userInfo)}>
      {({ values, setFieldValue, errors, touched }) => (
        <Form className="grid grid-cols-1 md:grid-cols-2">
          <FormikInput
            value={values.lastName}
            setFieldValue={setFieldValue}
            label={""}
            name="lastName"
            isError={!!errors.lastName && touched.lastName}
            errorMessage={errors.lastName}
          ></FormikInput>

          <FormikInput
            value={values.firstName}
            setFieldValue={setFieldValue}
            label={""}
            name="firstName"
            isError={!!errors.firstName && touched.firstName}
            errorMessage={errors.firstName}
          ></FormikInput>

          <FormikInput
            value={values.middleName}
            setFieldValue={setFieldValue}
            label={""}
            name="middleName"
            isError={!!errors.middleName && touched.middleName}
            errorMessage={errors.middleName}
          ></FormikInput>

          <FormikInput
            value={values.email}
            setFieldValue={setFieldValue}
            label={""}
            name="email"
            isError={!!errors.email && touched.email}
            errorMessage={errors.email}
          ></FormikInput>

          <FormikInput
            value={values.birthday}
            setFieldValue={setFieldValue}
            label={""}
            name="birthday"
            isError={!!errors.birthday && touched.birthday}
            errorMessage={errors.birthday}
          ></FormikInput>
        </Form>
      )}
    </Formik>
  );
}

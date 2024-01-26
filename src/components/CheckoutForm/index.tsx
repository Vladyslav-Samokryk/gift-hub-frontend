/* eslint-disable @typescript-eslint/no-misused-promises */
import DeliveryInputGroup from "components/DeliveryInputGroup";
import type { FormikHelpers } from "formik";
import { Formik, Field, Form } from "formik";
import { useTranslation } from "react-i18next";
import FormikInput from "shared/UI/FormikInput";
import ListBlock from "shared/UI/ListBlock";
import { CheckoutSchema } from "shared/helpers/formValidate";
import type { CheckoutValues } from "shared/types/Checkout";

function CheckoutForm(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        tel: "",
        delivery_type: "self",
        is_not_recall: false,
        is_another_person: false,
        is_comment: false,
        another_person: {
          tel: "",
          firstName: "",
          lastName: "",
        },
        is_gift: false,
        town: "",
        address: "",
        building: "",
        flat: "",
        post_office: "",
        comment: "",
        delivery_option: "",
      }}
      validationSchema={CheckoutSchema}
      onSubmit={(
        values: CheckoutValues,
        { setSubmitting }: FormikHelpers<CheckoutValues>,
      ) => {
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ values, setFieldValue, handleBlur, errors }) => (
        <Form className="primary flex w-full flex-col gap-5 lg:w-[60%]">
          <ListBlock
            index="1"
            indexStyle="after:content-bobble1"
            title={t("checkout.section.info")}
            className="grid grid-cols-2 gap-x-5 gap-y-8"
          >
            <FormikInput
              value={values.firstName}
              setFieldValue={setFieldValue}
              label={t("checkout.ph.name")}
              name="firstName"
              onBlur={handleBlur}
            />
            <FormikInput
              value={values.lastName}
              setFieldValue={setFieldValue}
              label={t("checkout.ph.surname")}
              name="lastName"
            />
            <FormikInput
              value={values.email}
              setFieldValue={setFieldValue}
              label={t("checkout.ph.email")}
              name="email"
              type="email"
            />
            <FormikInput
              value={values.tel}
              setFieldValue={setFieldValue}
              label={t("checkout.ph.tel")}
              name="tel"
              type="tel"
            />
          </ListBlock>

          <ListBlock
            index="2"
            indexStyle="after:content-bobble2"
            title={t("checkout.section.delivery.title")}
            className="flex flex-col gap-3"
          >
            <div className="flex justify-between">
              <label>
                <Field type="radio" name="delivery_type" value="self" />
                {t("checkout.section.delivery.self")}
              </label>
              <p className="font-bold text-blue-700">
                {t("checkout.section.delivery.price.free")}
              </p>
            </div>
            <DeliveryInputGroup
              values={values}
              setFieldValue={setFieldValue}
              type="nova"
            />
            <DeliveryInputGroup
              values={values}
              setFieldValue={setFieldValue}
              type="ukr"
            />
          </ListBlock>

          <ListBlock
            index="+"
            indexStyle="after:content-bobble3"
            title={t("checkout.section.additional.title")}
            className="flex flex-col"
          >
            <div>
              <label>
                <input
                  type="checkbox"
                  name="is_comment"
                  onChange={async (e) => {
                    await setFieldValue("is_comment", e.currentTarget.checked);
                    if (!values.is_comment) {
                      await setFieldValue("comment", "");
                    }
                  }}
                />
                {t("checkout.section.additional.add_comment")}
              </label>
              {values.is_comment && (
                <div>
                  <Field
                    as="textarea"
                    row={10}
                    className="h-[200px] w-full rounded-md border border-blue-300 bg-blue-300/[.08] p-3"
                    placeholder={t("checkout.section.additional.add_comment")}
                    name="comment"
                  />
                  <p className="secondary text-right text-gray-600">
                    {t("checkout.section.additional.comment_warning")}
                  </p>
                </div>
              )}
            </div>

            <label>
              <Field type="checkbox" name="is_not_recall" />
              {t("checkout.section.additional.not_recall")}
            </label>
            <div>
              <label>
                <Field
                  type="checkbox"
                  name="is_another_person"
                  onChange={async (e: {
                    currentTarget: { checked: boolean };
                  }) => {
                    await setFieldValue(
                      "is_another_person",
                      e.currentTarget.checked,
                    );
                    if (!values.is_another_person) {
                      await setFieldValue("another_person.tel", "");
                      await setFieldValue("another_person.firstName", "");
                      await setFieldValue("another_person.lastName", "");
                    }
                  }}
                />
                {t("checkout.section.additional.another_person")}
              </label>
              {values.is_another_person && (
                <div className="my-5 flex flex-col gap-5">
                  <FormikInput
                    value={values?.another_person?.tel ?? ""}
                    setFieldValue={setFieldValue}
                    label={t("checkout.ph.tel")}
                    name="another_person.tel"
                    type="tel"
                  />
                  <FormikInput
                    value={values?.another_person?.firstName ?? ""}
                    setFieldValue={setFieldValue}
                    label={t("checkout.ph.name")}
                    name="another_person.firstName"
                  />
                  <FormikInput
                    value={values?.another_person?.lastName ?? ""}
                    setFieldValue={setFieldValue}
                    label={t("checkout.ph.surname")}
                    name="another_person.lastName"
                  />
                </div>
              )}
            </div>

            <label>
              <Field type="checkbox" name="is_gift" />
              {t("checkout.section.additional.present")}
            </label>
          </ListBlock>
          <button
            className="btn btn-effect mx-auto"
            type="submit"
            onClick={() => console.log(errors)}
          >
            {t("checkout.btn")}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default CheckoutForm;

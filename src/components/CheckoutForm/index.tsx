/* eslint-disable @typescript-eslint/no-misused-promises */
import { useClearBasketMutation, usePostOrderMutation } from "app/api/products";
import { clear } from "app/store/cart/authCartSlice";
import { clearCart } from "app/store/cart/cartSlice";
import classNames from "classnames";
import DeliveryInputGroup from "components/DeliveryInputGroup";
import { Formik, Field, Form } from "formik";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import FormikInput from "shared/UI/FormikInput";
import ListBlock from "shared/UI/ListBlock";
import { CheckoutSchema } from "shared/helpers/checkoutFormValidate";
import { useAuth } from "shared/hooks/useAuth";
import useGetCartItems from "shared/hooks/useGetCartItems";
import type { CheckoutValues } from "shared/types/Checkout";
import type { Setter } from "shared/types/CommonTypes";

interface CheckoutFormProps {
  setCheckoutIsSuccess: Setter<boolean>;
}

function CheckoutForm({
  setCheckoutIsSuccess,
}: CheckoutFormProps): JSX.Element {
  const cart = useGetCartItems();
  const [postOrder] = usePostOrderMutation();
  const dispatch = useDispatch();
  const [clearBasket] = useClearBasketMutation();
  const { isAuth } = useAuth();
  const [cookies] = useCookies();
  const { t } = useTranslation();

  const handleClearCart = (): void => {
    if (isAuth) {
      void clearBasket(cookies.access);
      dispatch(clear());
    }
    dispatch(clearCart());
  };

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
      onSubmit={(values: CheckoutValues) => {
        const options: Partial<CheckoutValues> = Object.entries(values).reduce<
          Partial<CheckoutValues>
        >((acc, [key, value]) => {
          if (key === "another_person" && !values.is_another_person) {
            return acc;
          }
          if (value !== "") {
            acc[key as keyof CheckoutValues] = value;
          }
          return acc;
        }, {});

        postOrder({
          options,
          token: isAuth ? cookies.access : "",
          products: cart?.map((el) => {
            return {
              product: el.id,
              quantity: el?.count,
            };
          }),
        })
          .unwrap()
          .then(() => {
            handleClearCart();
            setCheckoutIsSuccess(true);
          })
          .catch(() => setCheckoutIsSuccess(false));
      }}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form className="primary flex w-full flex-col gap-5 lg:w-[60%]">
          <ListBlock
            index="1"
            indexStyle="after:content-bobble1"
            title={t("checkout.section.info")}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-y-8"
          >
            <FormikInput
              value={values.firstName}
              setFieldValue={setFieldValue}
              label={t("checkout.ph.name")}
              name="firstName"
              isError={!!errors.firstName && touched.firstName}
              errorMessage={errors.firstName}
            />
            <FormikInput
              value={values.lastName}
              setFieldValue={setFieldValue}
              label={t("checkout.ph.surname")}
              name="lastName"
              isError={!!errors.lastName && touched.lastName}
              errorMessage={errors.lastName}
            />
            <FormikInput
              value={values.email}
              setFieldValue={setFieldValue}
              label={t("checkout.ph.email")}
              name="email"
              type="email"
              isError={!!errors.email && touched.email}
              errorMessage={errors.email}
            />
            <FormikInput
              value={values.tel}
              setFieldValue={setFieldValue}
              label={t("checkout.ph.tel")}
              name="tel"
              type="tel"
              isError={!!errors.tel && touched.tel}
              errorMessage={errors.tel}
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
              errors={errors}
              touched={touched}
            />
            <DeliveryInputGroup
              values={values}
              setFieldValue={setFieldValue}
              type="ukr"
              errors={errors}
              touched={touched}
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
                    className={classNames(
                      "h-[200px] w-full rounded-md border border-blue-300 bg-blue-300/[.08] p-3",
                      {
                        "border-accent-red": !!errors?.comment,
                      },
                    )}
                    placeholder={t("checkout.section.additional.add_comment")}
                    name="comment"
                  />
                  {!!errors?.comment && (
                    <p className="secondary text-right text-accent-red">
                      {t(errors.comment)}
                    </p>
                  )}
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
                    isError={
                      !!errors?.another_person?.tel &&
                      touched?.another_person?.tel
                    }
                    errorMessage={errors?.another_person?.tel ?? ""}
                  />
                  <FormikInput
                    value={values?.another_person?.firstName ?? ""}
                    setFieldValue={setFieldValue}
                    label={t("checkout.ph.name")}
                    name="another_person.firstName"
                    isError={
                      !!errors?.another_person?.firstName &&
                      touched?.another_person?.firstName
                    }
                    errorMessage={errors?.another_person?.firstName ?? ""}
                  />
                  <FormikInput
                    value={values?.another_person?.lastName ?? ""}
                    setFieldValue={setFieldValue}
                    label={t("checkout.ph.surname")}
                    name="another_person.lastName"
                    isError={
                      !!errors?.another_person?.lastName &&
                      touched?.another_person?.lastName
                    }
                    errorMessage={errors?.another_person?.lastName ?? ""}
                  />
                </div>
              )}
            </div>

            <label>
              <Field type="checkbox" name="is_gift" />
              {t("checkout.section.additional.present")}
            </label>
          </ListBlock>
          <button className="btn btn-effect mx-auto my-5" type="submit">
            {t("checkout.btn")}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default CheckoutForm;

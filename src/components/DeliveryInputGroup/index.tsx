/* eslint-disable @typescript-eslint/no-misused-promises */
import classNames from "classnames";
import { Field } from "formik";
import { useTranslation } from "react-i18next";
import InputContainer from "shared/UI/InputContainer";
import type { CheckoutValues } from "shared/types/Checkout";

interface DeliveryInputGroupProps {
  values: CheckoutValues;
  type: "ukr" | "nova";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFieldValue: (field: string, value: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  touched: any;
}

export default function DeliveryInputGroup({
  values,
  type,
  setFieldValue,
  errors,
  touched,
}: DeliveryInputGroupProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <div
      className={classNames("flex flex-col gap-3", {
        "rounded-md border border-blue-300 bg-blue-300/[.08] p-2":
          values.delivery_type === type,
      })}
    >
      <div className="flex justify-between">
        <label>
          <Field type="radio" name="delivery_type" value={type} />
          {t("checkout.section.delivery." + type + "_poshta")}
        </label>
        <p className="font-bold">
          {t("checkout.section.delivery.price.by_tariff")}
        </p>
      </div>

      {values.delivery_type === type && (
        <div className="flex flex-col gap-3 px-2">
          <label>
            <Field type="radio" name="delivery_option" value="post_office" />
            {t("checkout.section.delivery.in_office")}
          </label>
          {values.delivery_option === "post_office" && (
            <div className="flex flex-col gap-3">
              <InputContainer
                label={t("checkout.ph.town")}
                inputValue={values?.town ?? ""}
                setInputValue={async () => setFieldValue("town", "")}
                isError={!!errors.town && touched.town}
                errorMessage={errors.town}
              >
                <Field
                  className="h-full w-full pr-8 focus:outline-none"
                  id="town"
                  name="town"
                  placeholder=""
                />
              </InputContainer>
              <InputContainer
                label={t("checkout.ph.office")}
                inputValue={values.post_office ?? ""}
                setInputValue={async () => setFieldValue("post_office", "")}
                isError={!!errors.post_office && touched.post_office}
                errorMessage={errors.post_office}
              >
                <Field
                  className="h-full w-full pr-8 focus:outline-none"
                  id="post_office"
                  name="post_office"
                  placeholder=""
                />
              </InputContainer>
            </div>
          )}
          <label>
            <Field type="radio" name="delivery_option" value="courier" />
            {t("checkout.section.delivery.by_courier")}
          </label>
          {values.delivery_option === "courier" && (
            <div className="flex flex-col gap-3">
              <InputContainer
                label={t("checkout.ph.town")}
                inputValue={values?.town ?? ""}
                setInputValue={async () => setFieldValue("town", "")}
                isError={!!errors.town && touched.town}
                errorMessage={errors.town}
              >
                <Field
                  className="h-full w-full pr-8 focus:outline-none"
                  id="town"
                  name="town"
                  placeholder=""
                />
              </InputContainer>
              <InputContainer
                label={t("checkout.ph.address")}
                inputValue={values.address ?? ""}
                setInputValue={async () => setFieldValue("address", "")}
                isError={!!errors.address && touched.address}
                errorMessage={errors.address}
              >
                <Field
                  className="h-full w-full pr-8 focus:outline-none"
                  id="address"
                  name="address"
                  placeholder=""
                />
              </InputContainer>
              <div className="flex gap-3">
                <InputContainer
                  label={t("checkout.ph.building")}
                  inputValue={values.building ?? ""}
                  setInputValue={async () => setFieldValue("building", "")}
                  isError={!!errors.building && touched.building}
                  errorMessage={errors.building}
                >
                  <Field
                    className="h-full w-full pr-8 focus:outline-none"
                    id="building"
                    name="building"
                    placeholder=""
                  />
                </InputContainer>
                <InputContainer
                  label={t("checkout.ph.flat")}
                  inputValue={values.flat ?? ""}
                  setInputValue={async () => setFieldValue("flat", "")}
                  isError={!!errors.flat && touched.flat}
                  errorMessage={errors.flat}
                >
                  <Field
                    className="h-full w-full pr-8 focus:outline-none"
                    id="flat"
                    name="flat"
                    placeholder=""
                  />
                </InputContainer>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

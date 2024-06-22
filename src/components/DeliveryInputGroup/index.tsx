/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-misused-promises */
import classNames from "classnames";
import type { UserDelivery } from "components/CheckoutForm";
import { Field } from "formik";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import InputContainer from "shared/UI/InputContainer";
import type { CheckoutValues } from "shared/types/Checkout";

interface DeliveryInputGroupProps {
  values: CheckoutValues;
  userValues?: UserDelivery | null;
  type: "ukr" | "nova";
  setFieldValue: (field: string, value: any) => void;
  errors: any;
  touched: any;
}

export default function DeliveryInputGroup({
  values,
  type,
  setFieldValue,
  errors,
  touched,
  userValues,
}: DeliveryInputGroupProps): JSX.Element {
  const { t } = useTranslation();
  const [isDeliveryChange, setIsDeliveryChange] = useState(true);

  useEffect(() => {
    if (userValues) {
      if (values.delivery_option === "courier") {
        setFieldValue("town", userValues?.address.town ?? "");
        setFieldValue("address", userValues?.address.street ?? "");
        setFieldValue("building", userValues?.address.building ?? "");
        setFieldValue("flat", userValues?.address.flat ?? "");
      } else {
        setFieldValue("post_office", userValues?.[type].postOffice ?? "");
        setFieldValue("town", userValues?.[type].town ?? "");
      }
    }
  }, [isDeliveryChange]);

  return (
    <div
      className={classNames("flex flex-col gap-3", {
        "rounded-md border border-blue-300 bg-blue-300/[.08] p-2":
          values.delivery_type === type,
      })}
    >
      <div className="flex justify-between">
        <label>
          <Field
            type="radio"
            name="delivery_type"
            value={type}
            onChange={() => {
              setIsDeliveryChange((prev) => !prev);
              setFieldValue("delivery_type", type);
            }}
          />
          {t("checkout.section.delivery." + type + "_poshta")}
        </label>
        <p className="font-bold">
          {t("checkout.section.delivery.price.by_tariff")}
        </p>
      </div>

      {values.delivery_type === type && (
        <div className="flex flex-col gap-3 px-2">
          <label>
            <Field
              type="radio"
              name="delivery_option"
              value="post_office"
              onChange={() => {
                setIsDeliveryChange((prev) => !prev);
                setFieldValue("delivery_option", "post_office");
              }}
            />
            {t("checkout.section.delivery.in_office")}
          </label>
          {values.delivery_option === "post_office" && (
            <div className="flex flex-col gap-3">
              <InputContainer
                label={t("checkout.ph.town")}
                inputValue={userValues?.[type].town ?? values?.town ?? ""}
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
            <Field
              type="radio"
              name="delivery_option"
              value="courier"
              onChange={() => {
                setIsDeliveryChange((prev) => !prev);
                setFieldValue("delivery_option", "courier");
              }}
            />
            {t("checkout.section.delivery.by_courier")}
          </label>
          {values.delivery_option === "courier" && (
            <div className="flex flex-col gap-3">
              <InputContainer
                label={t("checkout.ph.town")}
                inputValue={values?.town ?? userValues?.address.town ?? ""}
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
                inputValue={userValues?.address.street ?? values?.address ?? ""}
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
                  inputValue={
                    values.building ?? userValues?.address.building ?? ""
                  }
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
                  inputValue={values.flat ?? userValues?.address.flat ?? ""}
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

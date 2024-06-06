import * as yup from "yup";

const AnotherPersonSchema = yup.object().shape({
  firstName: yup.string().trim().required("checkout.errors.required"),
  lastName: yup.string().trim().required("checkout.errors.required"),
  tel: yup
    .string()
    .matches(/\+380[0-9]{9}/, "checkout.errors.tel")
    .length(13, "checkout.errors.tel")
    .required("checkout.errors.required"),
});

const noAnotherPersonSchema = yup.object().shape({
  firstName: yup.string().trim().notRequired(),
  lastName: yup.string().trim().notRequired(),
  tel: yup
    .string()
    .matches(/\+380[0-9]{9}/)
    .length(13, "checkout.errors.tel")
    .notRequired(),
});

export const CheckoutSchema = yup.object().shape({
  is_not_recall: yup.boolean(),
  is_another_person: yup.boolean(),
  is_comment: yup.boolean(),
  is_gift: yup.boolean(),
  firstName: yup.string().trim().required("checkout.errors.required"),
  lastName: yup.string().trim().required("checkout.errors.required"),
  email: yup
    .string()
    .email("checkout.errors.email")
    .required("checkout.errors.required"),
  tel: yup
    .string()
    .matches(/\+380[0-9]{9}/, "checkout.errors.tel")
    .length(13, "checkout.errors.tel")
    .required("checkout.errors.required"),
  delivery_type: yup
    .string()
    .matches(/(self|nova|ukr)/)
    .required("checkout.errors.required"),
  delivery_option: yup
    .string()
    .when("delivery_type", (delivery_type, schema) =>
      !delivery_type.includes("self")
        ? schema
            .matches(/(courier|post_office)/)
            .required("checkout.errors.required")
        : schema.notRequired(),
    ),
  another_person: yup
    .object()
    .when("is_another_person", (is_another_person) =>
      is_another_person.includes(true)
        ? AnotherPersonSchema
        : noAnotherPersonSchema,
    ),
  comment: yup
    .string()
    .when("is_comment", (is_comment, schema) =>
      is_comment
        ? schema
            .min(10, "checkout.errors.comment.small")
            .max(300, "checkout.errors.comment.big")
        : schema.notRequired(),
    ),
  town: yup
    .string()
    .when("delivery_type", (delivery_type) =>
      !delivery_type.includes("self")
        ? yup.string().trim().required("checkout.errors.required")
        : yup.string().notRequired(),
    ),
  post_office: yup
    .string()
    .when("delivery_option", (delivery_option) =>
      delivery_option.includes("post_office")
        ? yup.string().trim().required("checkout.errors.required")
        : yup.string().notRequired(),
    ),
  address: yup
    .string()
    .when("delivery_option", (delivery_option) =>
      delivery_option.includes("courier")
        ? yup.string().trim().required("checkout.errors.required")
        : yup.string().notRequired(),
    ),
  building: yup
    .string()
    .when("delivery_option", (delivery_option) =>
      delivery_option.includes("courier")
        ? yup.string().trim().required("checkout.errors.required")
        : yup.string().notRequired(),
    ),
  flat: yup
    .string()
    .when("delivery_option", (delivery_option) =>
      delivery_option.includes("courier")
        ? yup.string().trim().required("checkout.errors.required")
        : yup.string().notRequired(),
    ),
});

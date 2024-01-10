import * as yup from "yup";

const AnotherPersonSchema = yup.object().shape({
  firstName: yup.string().trim().required("required"),
  lastName: yup.string().trim().required("required"),
  tel: yup
    .string()
    .matches(/\+380[0-9]{9}/)
    .required("required"),
});

export const CheckoutSchema = yup.object().shape({
  is_payed: yup
    .boolean()
    .when("payment_type", ([payment_type]) =>
      payment_type === "card"
        ? yup.boolean().oneOf([true], "Field must be checked")
        : yup.boolean(),
    ),
  is_not_recall: yup.boolean(),
  is_another_person: yup.boolean(),
  is_comment: yup.boolean(),
  is_gift: yup.boolean(),
  firstName: yup.string().trim().required("required"),
  lastName: yup.string().trim().required("required"),
  email: yup.string().email("Invalid email").required("required"),
  tel: yup
    .string()
    .matches(/\+380[0-9]{9}/)
    .required("required"),
  delivery_type: yup
    .string()
    .matches(/(self|nova|ukr)/)
    .required("required"),
  delivery_option: yup.string().when("delivery_type", ([delivery_type]) =>
    delivery_type !== "self"
      ? yup
          .string()
          .matches(/(courier|post_office)/)
          .required("required")
      : yup.string().notRequired(),
  ),
  another_person: yup
    .object()
    .when("is_another_person", ([is_another_person]) =>
      is_another_person ? AnotherPersonSchema : yup.object().notRequired(),
    ),
  comment: yup
    .string()
    .when("is_comment", (_, schema) =>
      schema.trim().min(10, "small comment").max(300, "big comment"),
    ),

  town: yup
    .string()
    .when("delivery_option", ([delivery_option]) =>
      delivery_option
        ? yup.string().trim().required("required")
        : yup.string().notRequired(),
    ),

  post_office: yup
    .string()
    .when("delivery_option", ([delivery_option]) =>
      delivery_option === "post_office"
        ? yup.string().trim().required("required")
        : yup.string().notRequired(),
    ),

  address: yup
    .string()
    .when("delivery_option", ([delivery_option]) =>
      delivery_option === "courier"
        ? yup.string().trim().required("required")
        : yup.string().notRequired(),
    ),
  building: yup
    .string()
    .when("delivery_option", ([delivery_option]) =>
      delivery_option === "courier"
        ? yup.string().trim().required("required")
        : yup.string().notRequired(),
    ),
  flat: yup
    .string()
    .when("delivery_option", ([delivery_option]) =>
      delivery_option === "courier"
        ? yup.string().trim().required("required")
        : yup.string().notRequired(),
    ),
});

/* eslint-disable no-useless-escape */
import * as yup from "yup";

export const ChangePasswordSchema = yup.object().shape({
  current_password: yup.string().required("checkout.errors.required"),
  new_password: yup
    .string()
    .min(7, "input_password.rules.min_length")
    .matches(/^(?=.*[A-Za-z])(?=.*\d).*$/, "input_password.rules.letter_digit")
    .matches(/[A-Z]/, "input_password.rules.uppercase_letter")
    .matches(/[a-z]/, "input_password.rules.lowercase_letter")
    .matches(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
      "input_password.rules.special_symbol",
    )
    .required("checkout.errors.required"),
  new_password_try: yup
    .string()
    .oneOf([yup.ref("new_password"), ""], "input_password.rules.match")
    .required("checkout.errors.required"),
});

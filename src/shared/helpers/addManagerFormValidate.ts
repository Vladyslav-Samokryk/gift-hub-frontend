/* eslint-disable no-useless-escape */
import * as yup from "yup";

export const AddManagerSchema = yup.object().shape({
  name: yup.string().trim().min(2).required("checkout.errors.required"),
  email: yup
    .string()
    .email("checkout.errors.email")
    .required("checkout.errors.required"),
  login: yup
    .string()
    .required("checkout.errors.required")
    .matches(
      /^(?!.*[^\P{Alphabetic}a-zA-Z])/u,
      "input_password.rules.only_latin_letters",
    ),
  password: yup
    .string()
    .min(7, "input_password.rules.min_length")
    .matches(
      /^(?!.*[^\P{Alphabetic}a-zA-Z])/u,
      "input_password.rules.only_latin_letters",
    )
    .matches(/^(?=.*[A-Za-z])(?=.*\d).*$/, "input_password.rules.letter_digit")
    .matches(/[A-Z]/, "input_password.rules.uppercase_letter")
    .matches(/[a-z]/, "input_password.rules.lowercase_letter")
    .matches(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
      "input_password.rules.special_symbol",
    )
    .required("checkout.errors.required"),
});

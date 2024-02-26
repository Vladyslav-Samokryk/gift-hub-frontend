/* eslint-disable no-useless-escape */
import * as yup from "yup";

export const RegistrSchema = yup.object().shape({
  first_name: yup.string().trim().min(2).required("checkout.errors.required"),
  last_name: yup.string().trim().min(2).required("checkout.errors.required"),
  email: yup
    .string()
    .email("checkout.errors.email")
    .required("checkout.errors.required"),
  password: yup
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
  passwordTry: yup
    .string()
    .oneOf([yup.ref("password"), ""], "input_password.rules.match")
    .required("checkout.errors.required"),
});

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("checkout.errors.email")
    .required("checkout.errors.required"),
  password: yup.string().required("checkout.errors.required"),
});

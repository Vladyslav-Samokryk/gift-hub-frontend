import * as yup from "yup";
import { parse } from "date-fns/parse";

export const UserInfoSchema = yup.object().shape({
  first_name: yup.string().trim().required("checkout.errors.required"),
  last_name: yup.string().trim().required("checkout.errors.required"),
  email: yup
    .string()
    .email("checkout.errors.email")
    .required("checkout.errors.required"),
  mobile: yup
    .string()
    .matches(/\+380[0-9]{9}/, "checkout.errors.tel")
    .length(13, "checkout.errors.tel")
    .nullable(),
  dob: yup
    .mixed()
    .nullable()
    .transform(function (_value, originalValue) {
      const parsedDate = parse(
        originalValue.toString(),
        "yyyy-MM-dd",
        new Date(),
      );
      if (parsedDate.toString() !== "Invalid Date") {
        const year = parsedDate.getFullYear();
        if (year < 1940) {
          return "min";
        }
        if (parsedDate > new Date()) {
          return "max";
        }

        return parsedDate;
      }
      return null;
    })
    .test("valid", "birthday_errors.invalid", (value) => {
      return value !== null;
    })
    .test("min", "birthday_errors.date_in_past", (value) => {
      return value !== "min";
    })
    .test("max", "birthday_errors.date_in_future", (value) => {
      return value !== "max";
    }),
});

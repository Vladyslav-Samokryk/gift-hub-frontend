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
    .nullable(),
  dob: yup
    .date()
    .nullable()
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      if (typeof originalValue === "string") {
        const parsedDate = parse(originalValue, "dd.MM.yyyy", new Date());
        if (!isNaN(parsedDate.getTime())) {
          return parsedDate;
        }
      }
      return null;
    })
    .typeError("birthday_errors.invalid")
    .min(new Date("1969-11-13"), "birthday_errors.date_in_past")
    .max(new Date(), "birthday_errors.date_in_future"),
});

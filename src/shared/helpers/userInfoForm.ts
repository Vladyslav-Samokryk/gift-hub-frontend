import * as yup from "yup";
import { parse } from "date-fns/parse";

export const UserInfoSchema = yup.object().shape({
  first_name: yup.string().trim().required("checkout.errors.required"),
  last_name: yup.string().trim().required("checkout.errors.required"),
  email: yup
    .string()
    .email("checkout.errors.email")
    .required("checkout.errors.required"),
  mobile: yup.string().matches(/\+380[0-9]{9}/, "checkout.errors.tel"),
  dob: yup
    .date()
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, "dd.MM.yyyy", new Date());
      return result;
    })
    .typeError("birthday_errors.invalid")
    .min("1969-11-13", "birthday_errors.date_in_past")
    .max(new Date(), "birthday_errors.date_in_future"),
});

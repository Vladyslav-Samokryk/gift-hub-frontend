import * as yup from "yup";

export const UserAddressSchema = yup.object().shape({
  address: yup
    .object()
    .shape({
      town: yup.string().trim(),
      street: yup.string().trim(),
      building: yup.string().trim(),
      flat: yup.string().trim(),
    })
    .test("At least one of these fields needs to be filled", function (value) {
      if (value.town ?? value.street ?? value.building ?? value.flat) {
        if (value.town && value.street && value.building && value.flat) {
          return true;
        } else {
          return this.createError({
            message: "err_fill_all",
            path: "address.town",
          });
        }
      }
      return true;
    }),
  novaPoshta: yup
    .object()
    .shape({
      town: yup.string().trim(),
      postOffice: yup.string().trim(),
    })
    .test("At least one of these fields needs to be filled", function (value) {
      if (value.town ?? value.postOffice) {
        if (value.town && value.postOffice) {
          return true;
        } else {
          return this.createError({
            message: "err_fill_all",
            path: "novaPoshta.town",
          });
        }
      }
      return true;
    }),
  ukrPoshta: yup
    .object()
    .shape({
      town: yup.string().trim(),
      postOffice: yup.string().trim(),
    })
    .test("At least one of these fields needs to be filled", function (value) {
      if (value.town ?? value.postOffice) {
        if (value.town && value.postOffice) {
          return true;
        } else {
          return this.createError({
            message: "err_fill_all",
            path: "ukrPoshta.town",
          });
        }
      }
      return true;
    }),
});

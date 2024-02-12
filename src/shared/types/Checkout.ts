export interface CheckoutValues {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  delivery_type: "self" | "nova" | "ukr";
  delivery_option?: "courier" | "post_office" | "";
  town: string;
  address: string;
  building: string;
  flat: string;
  post_office: string;
  comment: string;
  is_not_recall: boolean;
  is_another_person: boolean;
  another_person: {
    tel: string;
    firstName: string;
    lastName: string;
  };
  is_gift: boolean;
  is_comment: boolean;
}

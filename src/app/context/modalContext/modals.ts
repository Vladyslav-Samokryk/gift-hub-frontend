import React from "react";

export enum MODALS {
  LOGIN = "login",
  REGISTR = "registration",
  BASKET = "basket",
  CATALOG = "catalog",
  CATEGORY = "category",
  SORT = "sort",
  FILTER = "filter",
  COMMENT = "comment",
}

const CategoryPopUp = React.lazy(
  async () => await import("../../../components/PopUps/Category/index"),
);
const SortPopUp = React.lazy(
  async () => await import("../../../components/PopUps/Sort/index"),
);
const FilterPopUp = React.lazy(
  async () => await import("../../../components/PopUps/Filter/index"),
);
const BasketPopUp = React.lazy(
  async () => await import("../../../components/PopUps/Basket/index"),
);
const CommentPopUp = React.lazy(
  async () => await import("../../../components/PopUps/Comment/index"),
);
const LoginPopUp = React.lazy(
  async () => await import("../../../components/PopUps/Login/index"),
);
const RegistrationPopUp = React.lazy(
  async () => await import("../../../components/PopUps/Registration/index"),
);
const CatalogPopUp = React.lazy(
  async () => await import("../../../components/PopUps/Catalog/index"),
);

export const modalsList = [
  { name: MODALS.LOGIN, component: LoginPopUp },
  { name: MODALS.REGISTR, component: RegistrationPopUp },
  { name: MODALS.BASKET, component: BasketPopUp },
  { name: MODALS.CATALOG, component: CatalogPopUp },
  { name: MODALS.CATEGORY, component: CategoryPopUp },
  { name: MODALS.SORT, component: SortPopUp },
  { name: MODALS.FILTER, component: FilterPopUp },
  { name: MODALS.COMMENT, component: CommentPopUp },
];

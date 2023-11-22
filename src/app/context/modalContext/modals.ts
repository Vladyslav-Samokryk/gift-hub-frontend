import React from "react";
import { CatalogPopUp, LoginPopUp, RegistrationPopUp } from "@src/components";

export enum MODALS {
  LOGIN = "login",
  REGISTR = "registration",
  BASKET = "basket",
  CATALOG = "catalog",
  CATEGORY = "category",
  SORT = "sort",
  FILTER = "filter",
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

export const modalsList = [
  { name: MODALS.LOGIN, component: LoginPopUp },
  { name: MODALS.REGISTR, component: RegistrationPopUp },
  // { name: MODALS.BASKET, component: Basket },
  { name: MODALS.CATALOG, component: CatalogPopUp },
  { name: MODALS.CATEGORY, component: CategoryPopUp },
  { name: MODALS.SORT, component: SortPopUp },
  { name: MODALS.FILTER, component: FilterPopUp },
];

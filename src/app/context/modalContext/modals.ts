import { lazy } from "react";
import PushNotification from "shared/UI/PushNotification";

export enum MODALS {
  LOGIN = "login",
  REGISTR = "registration",
  BASKET = "basket",
  CATALOG = "catalog",
  CATEGORY = "category",
  SORT = "sort",
  FILTER = "filter",
  COMMENT = "comment",
  CABINET = "cabinet",
  PUSH = "push",
}

const CategoryPopUp = lazy(
  async () => await import("../../../components/PopUps/Category/index"),
);
const SortPopUp = lazy(
  async () => await import("../../../components/PopUps/Sort/index"),
);
const FilterPopUp = lazy(
  async () => await import("../../../components/PopUps/Filter/index"),
);
const BasketPopUp = lazy(
  async () => await import("../../../components/PopUps/Basket/index"),
);
const CommentPopUp = lazy(
  async () => await import("../../../components/PopUps/Comment/index"),
);
const LoginPopUp = lazy(
  async () => await import("../../../components/PopUps/Login/index"),
);
const RegistrationPopUp = lazy(
  async () => await import("../../../components/PopUps/Registration/index"),
);
const CatalogPopUp = lazy(
  async () => await import("../../../components/PopUps/Catalog/index"),
);
const CabinetPopUp = lazy(
  async () => await import("../../../components/PopUps/UserCabinet/index"),
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
  { name: MODALS.CABINET, component: CabinetPopUp },
  { name: MODALS.PUSH, component: PushNotification },
];

import { Routes, Route, useRoutes } from "react-router";
import { Navigate, RouteObject } from "react-router-dom";

import {
  Catalog,
  FAQ,
  Settings,
  Contacts,
  Main,
  ShoppingCart,
  Product,
  AboutUs,
} from "@pages";
import { Layout, PrivateLayout } from "@layouts";
import { useAppSelector } from "../store";
import { ADMIN, MANAGER } from "@src/shared";

const useBuyerRouting = (): React.ReactElement | null => {
  // eslint-disable-next-line prefer-const
  let element = useRoutes([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "",
          element: <Main />,
        },
        {
          path: "catalog",
          element: <Catalog />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "contacts",
          element: <Contacts />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "faq",
          element: <FAQ />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "shopping-cart",
          element: <ShoppingCart />,
        },
        {
          path: "*",
          element: <Navigate to="/"/>,
        },
      ],
    },
  ]);

  return element;
};

const useManagerRouting = (): React.ReactElement | null => {
  // eslint-disable-next-line prefer-const
  let element = useRoutes([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "",
          element: <Main />,
        },
        {
          path: "catalog-for-manager",
          element: <Catalog />,
        },
        {
          path: "*",
          element: <Navigate to="/"/>,
        },
      ],
    },
  ]);

  return element;
};

const useAdminRouting = (): React.ReactElement | null => {
  // eslint-disable-next-line prefer-const
  let element = useRoutes([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "",
          element: <Main />,
        },
        {
          path: "catalog-for-admin",
          element: <Catalog />,
        },
      ],
    },
  ]);

  return element;
};

export const Routing = (): React.ReactElement | null => {
  const role = useAppSelector(state => state.user.role);

  if (role === MANAGER) {
    return useManagerRouting();
  } else if (role === ADMIN) {
    return useAdminRouting();
  }
  return useBuyerRouting();
};

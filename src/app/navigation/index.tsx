import { useRoutes } from "react-router";
import { Navigate } from "react-router-dom";

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
import { Layout } from "@layouts";
import { useAppSelector } from "../store";
import { ADMIN, MANAGER } from "@src/shared";

const useBuyerRouting = (): ReturnType<typeof useRoutes> => {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Main />,
        },
        {
          path: "catalog",
          element: <Catalog />,
          children: [{ path: ":id", element: <Catalog /> }],
        },
        {
          path: "search",
          element: <Catalog />,
          children: [{ path: ":q", element: <Catalog /> }],
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
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);

  return element;
};

const useManagerRouting = (): ReturnType<typeof useRoutes> => {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
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
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);

  return element;
};

const useAdminRouting = (): ReturnType<typeof useRoutes> => {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
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
  const role = useAppSelector((state) => state.user.role);

  switch (role) {
    case MANAGER: {
      return useManagerRouting();
    }
    case ADMIN: {
      return useAdminRouting();
    }
    default: {
      return useBuyerRouting();
    }
  }
};

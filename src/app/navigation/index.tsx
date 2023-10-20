import { useRoutes } from "react-router";
import { Navigate } from "react-router-dom";

import {
  FAQ,
  Settings,
  Contacts,
  Main,
  ShoppingCart,
  Product,
  AboutUs,
  CatalogBySearch,
  CatalogByCategory,
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
          element: <CatalogByCategory />,
          children: [{ path: ":id", element: <CatalogByCategory /> }],
        },
        {
          path: "search",
          element: <CatalogBySearch />,
          children: [{ path: ":q", element: <CatalogBySearch /> }],
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
          element: <CatalogByCategory />,
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
          element: <CatalogByCategory />,
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

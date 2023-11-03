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
  SecretGift,
  CatalogBySearch,
  CatalogByCategory,
} from "@pages";
import { Layout, CatalogLayout } from "@layouts";
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
          element: <CatalogLayout />,
          children: [{ path: ":id", element: <CatalogByCategory /> }],
        },
        {
          path: "search",
          element: <CatalogLayout />,
          children: [{ path: "", element: <CatalogBySearch /> }],
        },
        {
          path: "product",
          element: <Product />,
          children: [{ path: ":id", element: <Product /> }],
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
          path: "secret-gift",
          element: <SecretGift />,
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

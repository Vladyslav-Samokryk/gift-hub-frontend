import { useRoutes } from "react-router";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "../store";
import { ADMIN, MANAGER } from "shared/constants/roles";
import { lazy } from "react";

const CatalogLayout = lazy(
  async () => await import("../layouts/CatalogLayout"),
);
const Layout = lazy(async () => await import("app/layouts/global/Layout"));
const AboutUs = lazy(async () => await import("pages/AboutUs"));
const CatalogByCategory = lazy(
  async () => await import("pages/CatalogByCategory"),
);
const CatalogBySearch = lazy(async () => await import("pages/CatalogBySearch"));
const FAQ = lazy(async () => await import("pages/FAQ"));
const Main = lazy(async () => await import("pages/Main"));
const Product = lazy(async () => await import("pages/Product"));
const SecretGift = lazy(async () => await import("pages/SecretGift"));
const OfferContract = lazy(async () => await import("pages/OfferContract"));
const PaymentAndDelivery = lazy(
  async () => await import("pages/PaymentAndDelivery"),
);
const ReturnConditions = lazy(
  async () => await import("pages/ReturnConditions"),
);
const PrivacyPolicy = lazy(async () => await import("pages/PrivacyPolicy"));

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
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "faq",
          element: <FAQ />,
        },
        {
          path: "secret-gift",
          element: <SecretGift />,
        },
        {
          path: "offer-contract",
          element: <OfferContract />,
        },
        {
          path: "payment-and-delivery",
          element: <PaymentAndDelivery />,
        },
        {
          path: "return-conditions",
          element: <ReturnConditions />,
        },
        {
          path: "privacy-policy",
          element: <PrivacyPolicy />,
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

import { useRoutes } from "react-router";

import { useAppSelector } from "../store";
import { ADMIN, MANAGER } from "shared/constants/roles";
import { lazy } from "react";

const CatalogLayout = lazy(
  async () => await import("app/layouts/CatalogLayout"),
);
const UserCabinetLayout = lazy(
  async () => await import("app/layouts/UserCabinetLayout"),
);
const Layout = lazy(async () => await import("app/layouts/global/Layout"));
const AboutUs = lazy(async () => await import("pages/AboutUs"));
const CatalogByCategory = lazy(
  async () => await import("pages/CatalogByCategory"),
);
const CatalogBySearch = lazy(async () => await import("pages/CatalogBySearch"));
const Main = lazy(async () => await import("pages/Main"));
const Product = lazy(async () => await import("pages/Product"));
const SecretGift = lazy(async () => await import("pages/SecretGift"));
const Checkout = lazy(async () => await import("pages/Checkout"));
const OfferContract = lazy(async () => await import("pages/OfferContract"));
const PaymentAndDelivery = lazy(
  async () => await import("pages/PaymentAndDelivery"),
);
const ReturnConditions = lazy(
  async () => await import("pages/ReturnConditions"),
);
const PrivacyPolicy = lazy(async () => await import("pages/PrivacyPolicy"));
const UserInfoPage = lazy(async () => await import("pages/UserInfo"));
const NotFound = lazy(async () => await import("pages/NotFound"));
const WishlistPage = lazy(async () => await import("pages/Wishlist"));
const UserHistoryPage = lazy(async () => await import("pages/UserHistory"));
const UserSecurityPage = lazy(async () => await import("pages/UserSecurity"));
const UserAddressPage = lazy(async () => await import("pages/UserAddress"));

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
          path: "secret-gift",
          element: <SecretGift />,
        },
        {
          path: "checkout",
          element: <Checkout />,
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
          path: "user",
          element: <UserCabinetLayout />,
          children: [
            { path: "", element: <UserInfoPage /> },
            { path: "wishlist", element: <WishlistPage /> },
            { path: "security", element: <UserSecurityPage /> },
            { path: "history", element: <UserHistoryPage /> },
            { path: "address", element: <UserAddressPage /> },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
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
          element: <NotFound />,
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

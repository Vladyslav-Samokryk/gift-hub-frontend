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

  if (role === "manager") {
    return useManagerRouting();
  } else if (role === "admin") {
    return useAdminRouting();
  }
  return useBuyerRouting();
};

/* export const Routing = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="product">
          <Route index element={<Navigate to="/catalog" />} />
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="contacts" element={<Contacts />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="settings" element={<Settings />} />
        <Route path="shopping-cart" element={<PrivateLayout />}>
          <Route index element={<ShoppingCart />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}; */

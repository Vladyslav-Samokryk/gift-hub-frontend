import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";

import {
  Catalog,
  FAQ,
  Settings,
  Contacts,
  Main,
  ShoppingCart,
  Product,
} from "@pages";
import { Layout, PrivateLayout } from "@layouts";

export const Routing = (): JSX.Element => {
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
        <Route path="faq" element={<FAQ />} />
        <Route path="settings" element={<Settings />} />
        <Route path="shopping-cart" element={<PrivateLayout />}>
          <Route index element={<ShoppingCart />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

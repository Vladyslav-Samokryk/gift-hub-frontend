import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";

import {
  Catalog,
  FAQ,
  Settings,
  Contacts,
  Main,
  // NotFound,
  ShopingCart,
  Product,
} from "@src/pages";
import { Layout } from "./Layout";

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
        <Route path="shoping-cart" element={<ShopingCart />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

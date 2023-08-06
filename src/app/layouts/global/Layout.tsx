import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

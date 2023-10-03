import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { UpArrow, useHideOnScroll } from "@src/shared";

export const Layout = (): JSX.Element => {
  const isVisible = useHideOnScroll();
  return (
    <>
      <Header />
      <main>
        <Outlet />
        {!isVisible ? <UpArrow/> : null}
      </main>
      <Footer />
    </>
  );
};

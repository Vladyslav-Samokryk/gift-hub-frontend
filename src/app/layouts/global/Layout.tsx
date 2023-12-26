import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { useHideOnScroll } from "shared/hooks/useHideOnScroll";
import UpArrow from "shared/UI/Buttons/UpArrow";

const Layout = (): JSX.Element => {
  const isVisible = useHideOnScroll();
  return (
    <>
      <Header />
      <main>
        <Outlet />
        {!isVisible ? <UpArrow /> : null}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

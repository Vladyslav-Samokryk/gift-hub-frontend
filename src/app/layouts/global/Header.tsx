import { useLocation } from "react-router-dom";
import HeaderWithGoBack from "components/HeaderWithGoBack";
import HeaderWithSearch from "components/HeaderWithSearch";
import LanguageToggle from "components/LanguageToggle";
import NavigationByRole from "components/NavigationByRole";
import Logo from "shared/UI/Logo";
import type { Children } from "shared/types/CommonTypes";

export default function Header(): JSX.Element {
  const location = useLocation();

  const paths = [
    "/secret-gift",
    "/offer-contract",
    "/payment-and-delivery",
    "/return-conditions",
    "/privacy-policy",
    "/checkout",
    "/user",
  ];

  const backPaths = ["/user"];
  const additionalPaths = [
    "/",
    "/catalog",
    "/catalog/:id",
    "/search",
    "/product",
    "/product/:id",
    "/about-us",
    "/faq",
    "/catalog-for-manager",
    "/catalog-for-admin",
  ];

  const getHeaderComponent = (): Children | null => {
    switch (true) {
      case paths.includes(location.pathname):
        return (
          <HeaderWithGoBack
            withUserSection={
              !backPaths.some((path) => location.pathname.includes(path))
            }
          />
        );
      case additionalPaths.includes(location.pathname):
        return <HeaderWithSearch />;
      default:
        return null;
    }
  };

  const headerComponent = getHeaderComponent();

  return (
    <header>
      <section className="flex w-full items-center justify-between bg-white px-5 pb-6 shadow-main lg:px-20">
        <Logo className="h-[31px] w-[47px] self-end lg:h-[79px] lg:w-[110px]" />
        {(paths.includes(location.pathname) ||
          additionalPaths.includes(location.pathname)) && <NavigationByRole />}
        <LanguageToggle />
      </section>
      {headerComponent}
    </header>
  );
}

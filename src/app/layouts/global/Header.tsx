import { useLocation } from "react-router-dom";
import HeaderWithGoBack from "components/HeaderWithGoBack";
import HeaderWithSearch from "components/HeaderWithSearch";
import LanguageToggle from "components/LanguageToggle";
import NavigationByRole from "components/NavigationByRole";
import Logo from "shared/UI/Logo";
import type { Children } from "shared/types/CommonTypes";
import UserSection from "components/UserSection";
import { CabinetIcon } from "shared/assets/svg/UserAccount";
import { useScreenWidth } from "shared/hooks/useScreenWidth";
import { SCREEN } from "shared/constants/screens";
import { useModals } from "app/context/modalContext/useModals";
import { MODALS } from "app/context/modalContext/modals";

export default function Header(): JSX.Element {
  const location = useLocation();
  const windowWidth = useScreenWidth();
  const { onOpen } = useModals();

  const paths = [
    "/secret-gift",
    "/offer-contract",
    "/payment-and-delivery",
    "/return-conditions",
    "/privacy-policy",
    "/checkout",
    "/user",
  ];

  const userCabinet = "/user";

  const additionalPaths = [
    "/",
    "/catalog",
    "/search",
    "/product",
    "/about-us",
    "/faq",
    "/catalog-for-manager",
    "/catalog-for-admin",
  ];

  const getHeaderComponent = (): Children | null => {
    switch (true) {
      case paths.some((el) => location.pathname.includes(el)):
        return (
          <HeaderWithGoBack>
            {location.pathname.includes(userCabinet) ? (
              windowWidth <= SCREEN.MD ? (
                <button
                  type="button"
                  onClick={() => onOpen({ name: MODALS.CABINET })}
                >
                  <CabinetIcon />
                </button>
              ) : null
            ) : (
              <UserSection />
            )}
          </HeaderWithGoBack>
        );
      case additionalPaths.some((el) => location.pathname.includes(el)):
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

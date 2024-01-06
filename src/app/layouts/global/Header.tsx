import { useLocation } from "react-router-dom";
import HeaderWithGoBack from "components/HeaderWithGoBack";
import HeaderWithSearch from "components/HeaderWithSearch";
import LanguageToggle from "components/LanguageToggle";
import NavigationByRole from "components/NavigationByRole";
import Logo from "shared/UI/Logo";

export default function Header(): JSX.Element {
  const location = useLocation();

  return (
    <header>
      <section className="flex w-full items-center justify-between bg-white px-5 pb-6 shadow-main lg:px-20">
        <Logo className="h-[31px] w-[47px] self-end lg:h-[79px] lg:w-[110px]" />
        <NavigationByRole />
        <LanguageToggle />
      </section>

      {location.pathname.includes("/secret-gift") ||
      location.pathname.includes("/checkout") ? (
        <HeaderWithGoBack />
      ) : (
        <HeaderWithSearch />
      )}
    </header>
  );
}

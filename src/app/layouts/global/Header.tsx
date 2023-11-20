import { Logo } from "@shared";
import {
  HeaderWithGoBack,
  HeaderWithSearch,
  LanguageToggle,
  NavigationByRole,
} from "@components";
import { useLocation } from "react-router-dom";

export default function Header(): JSX.Element {
  const location = useLocation();

  return (
    <header>
      <section className="flex w-full items-center justify-between bg-white px-5 pb-6 shadow-main lg:px-20">
        <Logo className="h-[31px] w-[47px] self-end lg:h-[79px] lg:w-[110px]" />
        <NavigationByRole />
        <LanguageToggle />
      </section>

      {location.pathname.includes("/secret-gift") ? (
        <HeaderWithGoBack />
      ) : (
        <HeaderWithSearch />
      )}
    </header>
  );
}

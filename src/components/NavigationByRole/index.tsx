import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "app/store";
import { MANAGER, ADMIN } from "shared/constants/roles";
import ContactDropDown from "components/ContactDropDown";

export default function NavigationByRole(): JSX.Element {
  const { t } = useTranslation();
  const role = useAppSelector((state) => state.user.role);
  switch (role) {
    case MANAGER: {
      return (
        <nav>
          <Link
            to={"/catalog-for-manager"}
            className="secondary hover:text-blue-700"
          >
            {t("header_links.catalog")}
          </Link>
          ;
        </nav>
      );
    }
    case ADMIN: {
      return (
        <nav>
          <Link
            to={"/catalog-for-admin"}
            className="secondary hover:text-blue-700"
          >
            {t("header_links.catalog")}
          </Link>
          ;
        </nav>
      );
    }
    default: {
      return (
        <nav className="mobile-font md:secondary flex w-52 items-center justify-between px-5 pt-5 md:w-80 md:grow-0">
          <Link to={"/about-us"} className="hover:text-blue-700">
            {t("header_links.about")}
          </Link>
          <ContactDropDown />
        </nav>
      );
    }
  }
}

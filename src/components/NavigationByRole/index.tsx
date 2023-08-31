import { useAppSelector } from "@store";
import { ADMIN, MANAGER, useTypedTranslation, DropDown } from "@shared";
import { Link } from "react-router-dom";

export default function NavigationByRole (): JSX.Element {
  const t = useTypedTranslation();
  const role = useAppSelector(state => state.user.role);
  switch (role) {
    case MANAGER: {
      return <nav>
        <Link to={"/catalog-for-manager"} className="secondary hover:text-accent-turkus">{t("catalog")}</Link>;
      </nav>;
    }
    case ADMIN: {
      return <nav><Link to={"/catalog-for-admin"} className="secondary hover:text-accent-turkus">{t("catalog")}</Link>;
      </nav>;
    }
    default: {
      return (
        <nav className='flex pt-5 justify-between w-80'>
          <Link to={"/about-us"} className="secondary hover:text-accent-turkus">{t("aboutAs")}</Link>
          <Link to={"/contacts"} className="secondary flex items-center hover:text-accent-turkus">{t("contacts")}
            <DropDown/>
          </Link>
        </nav>
      );
    }
  }
}

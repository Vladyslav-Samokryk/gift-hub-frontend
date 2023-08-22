import { useAppSelector } from "@store";
import { ADMIN, MANAGER, useTypedTranslation, DropDown } from "@shared";
import { Link } from "react-router-dom";

export default function RoleLink (): JSX.Element {
  const t = useTypedTranslation();
  const role = useAppSelector(state => state.user.role);
  switch (role) {
    case MANAGER: {
      return <Link to={"/catalog-for-manager"} className="secondary hover:text-accent-turkus">{t("catalog")}</Link>;
    }
    case ADMIN: {
      return <Link to={"/catalog-for-admin"} className="secondary hover:text-accent-turkus">{t("catalog")}</Link>;
    }
    default: {
      return (
        <div className='flex justify-between w-[300px]'>
          <Link to={"/about-us"} className="secondary hover:text-accent-turkus">{t("aboutAs")}</Link>
          <Link to={"/contacts"} className="secondary flex items-center hover:text-accent-turkus">{t("contacts")}
            <DropDown/>
          </Link>
        </div>
      );
    }
  }
}

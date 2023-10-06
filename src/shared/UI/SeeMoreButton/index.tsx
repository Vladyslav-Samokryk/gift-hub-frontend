import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function SeeMoreButton(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center">
      <Link to={"/catalog"}>
        <p className="h6 w-fit hover:text-accent-turkus">
          {t("btn_show_more")}
        </p>
      </Link>
    </div>
  );
}

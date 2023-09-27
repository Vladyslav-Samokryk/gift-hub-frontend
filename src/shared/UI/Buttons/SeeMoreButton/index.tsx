import { useTypedTranslation } from "@src/shared";
import { Link } from "react-router-dom";

export default function SeeMoreButton (): JSX.Element {
  const t = useTypedTranslation();
  return (
    <div className="flex justify-center">
      <Link to={"/catalog"} >
        <p className="h6 w-fit hover:text-accent-turkus">
          {t("seeMore")}
        </p>
      </Link>
    </div>

  );
}

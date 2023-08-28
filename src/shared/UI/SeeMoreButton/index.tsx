import { useTypedTranslation } from "@src/shared";
import { Link } from "react-router-dom";

export default function SeeMoreButton (): JSX.Element {
  const t = useTypedTranslation();
  return (
    <Link className="h6" to={"/catalog"}>
      {t("seeMore")}
    </Link>
  );
}

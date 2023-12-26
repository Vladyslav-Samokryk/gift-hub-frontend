import * as classNames from "classnames";
import { useTranslation } from "react-i18next";

export default function SeeMoreButton({
  onClick,
  isHidden = false,
}: {
  onClick: () => void;
  isHidden?: boolean;
}): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="flex w-full justify-center">
      <p
        onClick={onClick}
        className={classNames("h6 w-fit hover:text-accent-turkus", {
          hidden: isHidden,
        })}
      >
        {t("btn_show_more")}
      </p>
    </div>
  );
}

import { useTranslation } from "react-i18next";

export default function SeeMoreButton({
  onClick,
}: {
  onClick: () => void;
}): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="flex w-full justify-center">
      <p
        onClick={() => onClick()}
        className="h6 w-fit hover:text-accent-turkus"
      >
        {t("btn_show_more")}
      </p>
    </div>
  );
}

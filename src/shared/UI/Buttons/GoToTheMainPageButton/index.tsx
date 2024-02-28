import { useTranslation } from "react-i18next";
import "../../../../app/styles/index.scss";

interface IProps {
  className?: string;
  children?: React.ReactNode;
  onclick: () => void;
}

export default function GoToTheMainPageBtn({
  className,
  children,
  onclick,
}: IProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <button onClick={onclick} className={className} type="button">
      {children}
      <p className="mobile-font font-medium lg:secondary">{t("goToTheMainPage")}</p>
    </button>
  );
}

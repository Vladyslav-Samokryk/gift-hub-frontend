import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RightBigArrow } from "shared/assets/svg/Arrows";
import UserSection from "components/UserSection";

interface HeaderWithGoBackProps {
  withUserSection: boolean;
}

export default function HeaderWithGoBack({
  withUserSection = false,
}: HeaderWithGoBackProps): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <section className="m-auto flex w-[90%] items-center justify-between px-3 py-5">
      <button
        className="flex items-center justify-center gap-3"
        onClick={() => navigate("/")}
      >
        <RightBigArrow />
        <h6 className="h6">{t("main_page")}</h6>
      </button>
      {withUserSection && <UserSection />}
    </section>
  );
}

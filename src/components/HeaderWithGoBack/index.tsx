import { RightBigArrow } from "@shared";
import type { TRSecretGift } from "@shared";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { UserSection } from "@components";

export default function HeaderWithGoBack(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const secretGift: TRSecretGift = t("secret_gift", {
    returnObjects: true,
  });
  return (
    <section className="flex w-full items-start justify-between md:mb-6 md:mt-8 md:h-28 md:px-5 lg:mb-1 lg:h-fit">
      <button
        className="flex items-center justify-center gap-3"
        onClick={() => navigate("/")}
      >
        <RightBigArrow />
        <h6 className="h6">{secretGift.header_link}</h6>
      </button>
      <UserSection />
    </section>
  );
}

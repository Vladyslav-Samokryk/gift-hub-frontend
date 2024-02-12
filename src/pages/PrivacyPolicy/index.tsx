import { useTranslation } from "react-i18next";
import AdditionalInfo from "components/AdditionalInfo";

import type { TRPrivacyPolice } from "shared/types/Translation";

export default function PrivacyPolice(): JSX.Element {
  const { t } = useTranslation();

  const privacyPolice: TRPrivacyPolice = t("privacy_police", {
    returnObjects: true,
  });

  return <AdditionalInfo data={privacyPolice} />;
}

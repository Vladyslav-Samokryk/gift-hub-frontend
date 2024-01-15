import { useTranslation } from "react-i18next";
import AdditionalInfo from "components/AdditionalInfo";

import type { TROfferContact } from "shared/types/Translation";

export default function OfferContract(): JSX.Element {
  const { t } = useTranslation();

  const offreContract: TROfferContact = t("offer_contract", {
    returnObjects: true,
  });

  return <AdditionalInfo data={offreContract} />;
}

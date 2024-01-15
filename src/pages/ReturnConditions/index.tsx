import { useTranslation } from "react-i18next";
import AdditionalInfo from "components/AdditionalInfo";

import type { TRReturnConditions } from "shared/types/Translation";

export default function ReturnConditions(): JSX.Element {
  const { t } = useTranslation();

  const returnConditions: TRReturnConditions = t("return_conditions", {
    returnObjects: true,
  });

  return <AdditionalInfo data={returnConditions} />;
}

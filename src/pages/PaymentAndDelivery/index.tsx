import { useTranslation } from "react-i18next";
import AdditionalInfo from "components/AdditionalInfo";

import type { TRPaymantAndDelivery } from "shared/types/Translation";

export default function PaymentAndDelivery(): JSX.Element {
  const { t } = useTranslation();

  const paymentAndDelivery: TRPaymantAndDelivery = t("payment_and_delivery", {
    returnObjects: true,
  });

  return <AdditionalInfo data={paymentAndDelivery} />;
}

import { useTypedTranslation } from "@i18n";

export default function Footer (): JSX.Element {
  const t = useTypedTranslation();

  return (
    <div>
      <h2>{t("footer")}</h2>
    </div>
  );
}

import { useTypedTranslation } from "@shared";

export default function Footer (): JSX.Element {
  const t = useTypedTranslation();

  return (
    <footer className="p-3 bg-[#D9D9D9]">
      <h2>{t("footer")}</h2>
    </footer>
  );
}

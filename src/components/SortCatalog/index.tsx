import type { TRSorts } from "@src/shared";
import { useTranslation } from "react-i18next";

export default function SortCatalog(): JSX.Element {
  const { t } = useTranslation();
  const sorts: TRSorts = t("sorts", { returnObjects: true });

  return (
    <section className="additional flex h-10 w-full items-center justify-between rounded-md bg-white pl-1 pr-[10%]">
      <p className="text-gray-900">{t("sorts_title")}</p>
      {Object.values(sorts).map((sort, i) => (
        <button key={i}>{sort}</button>
      ))}
    </section>
  );
}

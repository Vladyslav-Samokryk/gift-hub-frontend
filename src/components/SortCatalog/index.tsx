import type { TRSorts } from "@shared";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { useSortContext } from "@context/catalogContext";

export default function SortCatalog(): JSX.Element {
  const { t } = useTranslation();
  const sorts: TRSorts = t("sorts", { returnObjects: true });
  const { sortParams, setSortParams } = useSortContext();
  return (
    <section className="additional flex h-10 w-full items-center justify-between rounded-md bg-white px-1 lg:pr-[40%]">
      <p className="text-gray-900">{t("sorts_title")}</p>
      {Object.keys(sorts).map((sort, i) => (
        <button
          key={i}
          onClick={() => setSortParams(sort)}
          className={classNames("px-1", {
            "rounded-full bg-purple-100": sortParams === sort,
          })}
        >
          {sorts[sort as keyof TRSorts]}
        </button>
      ))}
    </section>
  );
}

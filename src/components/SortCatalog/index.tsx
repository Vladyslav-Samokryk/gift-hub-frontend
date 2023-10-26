import { useScreenWidth, type TRSorts, SCREEN, RadioButton } from "@shared";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { useSortContext } from "@context/catalogContext";

export default function SortCatalog(): JSX.Element {
  const { t } = useTranslation();
  const sorts: TRSorts = t("sorts", { returnObjects: true });
  const { sortParams, setSortParams } = useSortContext();
  const windowWidth = useScreenWidth();
  return (
    <section className="additional flex w-60 flex-col items-center gap-6 divide-y-2 rounded-md bg-white px-1 lg:h-10 lg:w-full lg:flex-row lg:divide-y-0">
      {windowWidth > SCREEN.LG && (
        <p className="text-gray-900">{t("sorts_title")}</p>
      )}
      {Object.keys(sorts).map((sort, i) => {
        return windowWidth > SCREEN.LG ? (
          <button
            key={i}
            onClick={() => setSortParams(sort)}
            className={classNames("px-1", {
              "rounded-full bg-purple-100": sortParams === sort,
            })}
          >
            {sorts[sort as keyof TRSorts]}
          </button>
        ) : (
          <RadioButton
            key={i}
            text={sorts[sort as keyof TRSorts]}
            value={sort}
            onClick={() => setSortParams(sort)}
            className={"pt-3"}
            checked={sortParams === sort}
          />
        );
      })}
    </section>
  );
}

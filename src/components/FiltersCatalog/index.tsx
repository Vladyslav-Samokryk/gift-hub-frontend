import type { TRFilters } from "@src/shared";
import { Checkbox, StarRate, RangeWithInputs } from "@src/shared";
import { useTranslation } from "react-i18next";

export default function FiltersCatalog(): JSX.Element {
  const { t } = useTranslation();
  const filters: TRFilters = t("filters", { returnObjects: true });

  return (
    <section className="h-max divide-y-2 rounded-md bg-white px-3 py-2 shadow-drop">
      <div>
        <h3>{t("filters_title")}</h3>
        {Object.values(filters).map((filter, i) => (
          <Checkbox key={i} title={filter} />
        ))}
      </div>

      <div>
        <h3>{t("rate")}</h3>
        <div className="flex">
          <Checkbox title="" />
          <StarRate rate={5} />
        </div>

        <div className="flex">
          <Checkbox title="" />
          <StarRate rate={4} />
        </div>
      </div>

      <div>
        <h3>{t("price")}</h3>
        <RangeWithInputs />
      </div>
    </section>
  );
}

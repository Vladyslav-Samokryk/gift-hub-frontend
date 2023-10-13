import type { TRFilters } from "@src/shared";
import {
  Checkbox,
  StarRate,
  RangeWithInputs,
  ListContainer,
} from "@src/shared";
import { useTranslation } from "react-i18next";

export default function FiltersCatalog(): JSX.Element {
  const { t } = useTranslation();
  const filters: TRFilters = t("filters", { returnObjects: true });

  return (
    <section className="secondary flex h-max flex-col gap-6 divide-y-2 rounded-md bg-white px-3 py-2 font-bold shadow-drop">
      <ListContainer title={t("filters_title")}>
        {Object.values(filters).map((filter, i) => (
          <Checkbox key={i} title={filter} />
        ))}
      </ListContainer>

      <ListContainer title={t("rate")}>
        <div className="flex">
          <Checkbox title="" />
          <StarRate rate={5} />
        </div>

        <div className="flex">
          <Checkbox title="" />
          <StarRate rate={4} />
        </div>
      </ListContainer>

      <ListContainer title={t("price")}>
        <RangeWithInputs />
      </ListContainer>
    </section>
  );
}

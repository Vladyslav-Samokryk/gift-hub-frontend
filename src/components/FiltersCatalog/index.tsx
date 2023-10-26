import type { TRFilters } from "@shared";
import {
  Checkbox,
  StarRate,
  RangeWithInputs,
  ListContainer,
} from "@src/shared";
import { useTranslation } from "react-i18next";
import { useFilterContext } from "@context/catalogContext";

export default function FiltersCatalog(): JSX.Element {
  const { t } = useTranslation();
  const filters: TRFilters = t("filters", { returnObjects: true });
  const { filterParams, setFilterParams } = useFilterContext();

  return (
    <section className="secondary flex h-max w-60 flex-col gap-6 divide-y-2 rounded-md bg-white px-3 py-2 font-bold lg:w-full lg:shadow-drop">
      <ListContainer title={t("filters_title")}>
        {Object.keys(filters).map((filter, i) => (
          <Checkbox
            key={i}
            title={filters[filter as keyof TRFilters]}
            onChange={(e) => {
              setFilterParams({
                ...filterParams,
                main: e.target.checked
                  ? [...filterParams.main, filter as keyof TRFilters]
                  : filterParams.main.filter((main) => main !== filter),
              });
            }}
            checked={filterParams.main.includes(filter)}
          />
        ))}
      </ListContainer>

      <ListContainer title={t("rate")}>
        <div className="flex">
          <Checkbox
            title=""
            onChange={(e) => {
              setFilterParams({
                ...filterParams,
                rate: e.target.checked
                  ? [...filterParams.rate, 5]
                  : filterParams.rate.filter((rate) => rate !== 5),
              });
            }}
            checked={filterParams.rate.includes(5)}
          />
          <StarRate rate={5} />
        </div>

        <div className="flex">
          <Checkbox
            title=""
            onChange={(e) => {
              setFilterParams({
                ...filterParams,
                rate: e.target.checked
                  ? [...filterParams.rate, 4]
                  : filterParams.rate.filter((rate) => rate !== 4),
              });
            }}
            checked={filterParams.rate.includes(4)}
          />
          <StarRate rate={4} />
        </div>
      </ListContainer>

      <ListContainer title={t("price")}>
        <RangeWithInputs />
      </ListContainer>
    </section>
  );
}

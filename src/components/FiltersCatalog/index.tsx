import type { TRFilters } from "@shared";
import {
  Checkbox,
  StarRate,
  RangeWithInputs,
  ListContainer,
  setSearchParam,
  removeSearchParam,
} from "@shared";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";

interface Filters {
  main: string[] | string;
  rate: string[] | string;
}

export default function FiltersCatalog(): JSX.Element {
  const { t } = useTranslation();
  const filters: TRFilters = t("filters", { returnObjects: true });
  const searchParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();

  const handleCheckboxClick = (
    filterType: keyof Filters,
    value: string,
  ): void => {
    let newUrl = "";
    if (searchParams.has(filterType, value)) {
      newUrl = removeSearchParam(filterType, value);
    } else {
      newUrl = setSearchParam(filterType, value, true);
    }
    navigate(newUrl);
  };

  return (
    <section className="secondary flex h-max w-60 flex-col gap-6 divide-y-2 rounded-md bg-white px-3 py-2 font-bold lg:w-full lg:shadow-drop">
      <ListContainer title={t("filters_title")}>
        {Object.keys(filters).map((filter, i) => (
          <Checkbox
            key={i}
            title={filters[filter as keyof TRFilters]}
            onChange={() => handleCheckboxClick("main", filter)}
            checked={searchParams.has("main", filter)}
          />
        ))}
      </ListContainer>

      <ListContainer title={t("rate")}>
        <div className="flex">
          <Checkbox
            title=""
            onChange={() => handleCheckboxClick("rate", "5")}
            checked={searchParams.has("rate", "5")}
          />
          <StarRate rate={5} />
        </div>

        <div className="flex">
          <Checkbox
            title=""
            onChange={() => handleCheckboxClick("rate", "4")}
            checked={searchParams.has("rate", "4")}
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

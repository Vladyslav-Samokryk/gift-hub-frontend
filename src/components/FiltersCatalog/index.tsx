import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";
import Checkbox from "shared/UI/Checkbox";
import ListContainer from "shared/UI/ListContainer";
import RangeWithInputs from "shared/UI/Range/RangeWithInputs";
import StarRate from "shared/UI/StarRate";
import { removeSearchParam, setSearchParam } from "shared/helpers/url";
import type { TRFilters } from "shared/types/Translation";

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
    if (searchParams.getAll(filterType).includes(value)) {
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
            id={filter}
            title={filters[filter as keyof TRFilters]}
            onChange={() => handleCheckboxClick("main", filter)}
            checked={searchParams.getAll("main").includes(filter)}
          />
        ))}
      </ListContainer>

      <ListContainer title={t("rate")}>
        <div className="flex">
          <Checkbox
            title=""
            id="rate5"
            onChange={() => handleCheckboxClick("rate", "5")}
            checked={searchParams.getAll("rate").includes("5")}
          />
          <StarRate rate={5} />
        </div>

        <div className="flex">
          <Checkbox
            title=""
            id="rate4"
            onChange={() => handleCheckboxClick("rate", "4")}
            checked={searchParams.getAll("rate").includes("4")}
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

import type { TRFilters } from "@shared";
import {
  Checkbox,
  StarRate,
  RangeWithInputs,
  ListContainer,
  getSearchParams,
  removeSearchParam,
  setSearchParam,
} from "@shared";
import { useTranslation } from "react-i18next";

import { useEffect, useState } from "react";
import { usePaginationParamsContext } from "@src/app/context/catalogContext";

interface Filters {
  main: string[] | string;
  rate: string[] | string;
}

export default function FiltersCatalog(): JSX.Element {
  const { t } = useTranslation();
  const filters: TRFilters = t("filters", { returnObjects: true });
  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    main: [],
    rate: [],
  });
  const searchParams = getSearchParams();
  const { setTrigger } = usePaginationParamsContext();

  useEffect(() => {
    setSelectedFilters({
      main: Array.isArray(searchParams.main)
        ? [...searchParams.main]
        : searchParams.main
        ? [searchParams.main]
        : [],
      rate: [...(searchParams.rate || [])],
    });
  }, []);

  const handleCheckboxClick = (
    filterType: keyof Filters,
    value: string,
  ): void => {
    const updatedFilters = { ...selectedFilters };
    const filterArray = updatedFilters[filterType];

    if (filterArray.includes(value)) {
      removeSearchParam(filterType, value);
      updatedFilters[filterType] = Array.isArray(filterArray)
        ? filterArray.filter((el) => el !== value)
        : "";
    } else {
      setSearchParam(filterType, value);
      const newValue = Array.isArray(filterArray)
        ? [...filterArray]
        : [filterArray];
      updatedFilters[filterType] = newValue.concat(value);
    }
    setTrigger((prevTrigger) => prevTrigger + 1);
    setSelectedFilters(updatedFilters);
  };

  return (
    <section className="secondary flex h-max w-60 flex-col gap-6 divide-y-2 rounded-md bg-white px-3 py-2 font-bold lg:w-full lg:shadow-drop">
      <ListContainer title={t("filters_title")}>
        {Object.keys(filters).map((filter, i) => (
          <Checkbox
            key={i}
            title={filters[filter as keyof TRFilters]}
            onChange={() => handleCheckboxClick("main", filter)}
            checked={selectedFilters.main.includes(filter)}
          />
        ))}
      </ListContainer>

      <ListContainer title={t("rate")}>
        <div className="flex">
          <Checkbox
            title=""
            onChange={() => handleCheckboxClick("rate", "5")}
            checked={selectedFilters.rate.includes("5")}
          />
          <StarRate rate={5} />
        </div>

        <div className="flex">
          <Checkbox
            title=""
            onChange={() => handleCheckboxClick("rate", "4")}
            checked={selectedFilters.rate.includes("4")}
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

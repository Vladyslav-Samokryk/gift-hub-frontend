/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MIN_PRICE, MAX_PRICE } from "@src/shared";
import { createContext, useContext } from "react";

export interface Filters {
  rate: number[];
  main: string[];
  priceFrom: number;
  priceTo: number;
}

interface FilterContext {
  filterParams: Filters;
  setFilterParams: (_value: Filters) => void;
}

interface SortContext {
  sortParams: string;
  setSortParams: (_value: string) => void;
}

export const FilterParamsContext = createContext<FilterContext>({
  filterParams: {
    rate: [],
    main: ["available"],
    priceFrom: MIN_PRICE,
    priceTo: MAX_PRICE,
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFilterParams: () => {},
});
export const SortParamsContext = createContext<SortContext>({
  sortParams: "popular",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSortParams: () => {},
});

export const useFilterContext = () => useContext(FilterParamsContext);

export const useSortContext = () => useContext(SortParamsContext);

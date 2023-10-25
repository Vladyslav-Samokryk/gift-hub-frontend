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

interface PaginationContext {
  page: number;
  productNum: number;
  count: number;
  setPage: (_value: number) => void;
  setProductNum: (_value: number) => void;
  setCount: (_value: number) => void;
}

export const FilterParamsContext = createContext<FilterContext>({
  filterParams: {
    rate: [],
    main: ["available"],
    priceFrom: MIN_PRICE,
    priceTo: MAX_PRICE,
  },
  setFilterParams: (val) => val,
});

export const SortParamsContext = createContext<SortContext>({
  sortParams: "popular",
  setSortParams: (val) => val,
});

export const PaginationParamsContext = createContext<PaginationContext>({
  page: 1,
  productNum: 9,
  count: 0,
  setPage: (val) => val,
  setProductNum: (val) => val,
  setCount: (val) => val,
});

export const useFilterContext = (): FilterContext =>
  useContext(FilterParamsContext);

export const useSortContext = (): SortContext => useContext(SortParamsContext);

export const usePaginationParamsContext = (): PaginationContext =>
  useContext(PaginationParamsContext);

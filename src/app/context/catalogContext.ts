import { PAGINATION_LOAD } from "@src/shared";
import { createContext, useContext } from "react";

interface PaginationContext {
  page: number;
  productNum: number;
  count: number;
  setPage: (newValue: number | ((prevValue: number) => number)) => void;
  setProductNum: (_value: number) => void;
  setCount: (_value: number) => void;
  paginationLoad: string;
  setPaginationLoad: (_value: string) => void;
}

export const PaginationParamsContext = createContext<PaginationContext>({
  page: 1,
  productNum: 9,
  count: 0,
  setPage: (val) => val,
  setProductNum: (val) => val,
  setCount: (val) => val,
  paginationLoad: PAGINATION_LOAD.PAGE,
  setPaginationLoad: (val) => val,
});

export const usePaginationParamsContext = (): PaginationContext =>
  useContext(PaginationParamsContext);

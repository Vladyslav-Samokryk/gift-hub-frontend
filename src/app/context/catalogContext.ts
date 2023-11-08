import { PAGINATION_LOAD } from "@src/shared";
import { createContext, useContext } from "react";

interface PaginationContext {
  page: number;
  productNum: number;
  count: number;
  trigger: number;
  setTrigger: (newValue: number | ((prevValue: number) => number)) => void;
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
  trigger: 0,
  setTrigger: (val) => val,
  setPage: (val) => val,
  setProductNum: (val) => val,
  setCount: (val) => val,
  paginationLoad: PAGINATION_LOAD.PAGE,
  setPaginationLoad: (val) => val,
});

export const usePaginationParamsContext = (): PaginationContext =>
  useContext(PaginationParamsContext);

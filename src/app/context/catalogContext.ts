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

export const PaginationParamsContext = createContext<PaginationContext | null>(
  null,
);

export const usePaginationParamsContext = (): PaginationContext | null =>
  useContext(PaginationParamsContext);

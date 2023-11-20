import type { Dispatch, SetStateAction } from "react";
import { createContext, useContext } from "react";

interface PaginationContext {
  page: number;
  productNum: number;
  count: number;
  setPage: Dispatch<SetStateAction<number>>;
  setProductNum: Dispatch<SetStateAction<number>>;
  setCount: Dispatch<SetStateAction<number>>;
  paginationLoad: string;
  setPaginationLoad: Dispatch<SetStateAction<string>>;
}

export const PaginationParamsContext = createContext<PaginationContext | null>(
  null,
);

export const usePaginationParamsContext = (): PaginationContext | null =>
  useContext(PaginationParamsContext);

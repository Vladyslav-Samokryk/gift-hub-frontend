import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface Pagination {
  page: number;
  productNum: number;
  count: number;
  paginationLoad: "load_new_page" | "add_new_products";
}

const initialState: Pagination = {
  page: 1,
  productNum: 9,
  count: 0,
  paginationLoad: "load_new_page",
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    setProductNum(state, action: PayloadAction<number>) {
      state.productNum = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setPaginationLoad(
      state,
      action: PayloadAction<"load_new_page" | "add_new_products">,
    ) {
      state.paginationLoad = action.payload;
    },
  },
});

export const { setCount, setProductNum, setPage, setPaginationLoad } =
  catalogSlice.actions;
export default catalogSlice.reducer;

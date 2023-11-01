/* import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { MAX_PRICE, MIN_PRICE } from "@src/shared";

interface CatalogState {
  sortParams: string;
  rate: number[];
  main: string[];
  priceFrom: number;
  priceTo: number;
}

const initialState: CatalogState = {
  sortParams: "popular",
  rate: [],
  main: ["available"],
  priceFrom: MIN_PRICE,
  priceTo: MAX_PRICE,
};

interface SortAction {
  sortParams: CatalogState["sortParams"];
}

interface RateAction {
  rate: CatalogState["rate"];
}

interface MainAction {
  main: CatalogState["main"];
}

interface PriceFromAction {
  priceFrom: CatalogState["priceFrom"];
}

interface PriceToAction {
  priceTo: CatalogState["priceTo"];
}

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setSortParams(state, action: PayloadAction<SortAction>) {
      const { sortParams } = action.payload;
      state.sortParams = sortParams;
    },
    setFilterRate(state, action: PayloadAction<RateAction>) {
      const { rate } = action.payload;
      state.rate = rate;
    },
    setFilterMain(state, action: PayloadAction<MainAction>) {
      const { main } = action.payload;
      state.main = main;
    },
    setFilterPriceFrom(state, action: PayloadAction<PriceFromAction>) {
      const { priceFrom } = action.payload;
      state.priceFrom = priceFrom;
    },
    setFilterPriceTo(state, action: PayloadAction<PriceToAction>) {
      const { priceTo } = action.payload;
      state.priceTo = priceTo;
    },
  },
});

export const {
  setSortParams,
  setFilterRate,
  setFilterMain,
  setFilterPriceFrom,
  setFilterPriceTo,
} = catalogSlice.actions;
export default catalogSlice.reducer;
 */

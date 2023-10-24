import { MAX_PRICE, MIN_PRICE } from "@src/shared";
import {
  Breadcrumbs,
  FiltersCatalog,
  SortCatalog,
  BuyTogetherSection,
} from "@components";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import type { Filters } from "./context";
import { FilterParamsContext, SortParamsContext } from "./context";

export default function CatalogLayout(): JSX.Element {
  const [filterParams, setFilterParams] = useState<Filters>({
    rate: [],
    main: ["available"],
    priceFrom: MIN_PRICE,
    priceTo: MAX_PRICE,
  });
  const [sortParams, setSortParams] = useState("popular");

  return (
    <FilterParamsContext.Provider value={{ filterParams, setFilterParams }}>
      <SortParamsContext.Provider value={{ sortParams, setSortParams }}>
        <div className="m-auto p-5">
          <Breadcrumbs />

          <section className="grid grid-cols-[230px_1fr] gap-6">
            <FiltersCatalog />
            <div>
              <SortCatalog />
              <div>
                <div className="mt-3 flex flex-wrap justify-between gap-7">
                  <Outlet />
                </div>
                <div>pagination</div>
              </div>
            </div>
          </section>

          <hr />

          <BuyTogetherSection />
        </div>
      </SortParamsContext.Provider>
    </FilterParamsContext.Provider>
  );
}

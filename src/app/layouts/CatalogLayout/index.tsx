import { MAX_PRICE, MIN_PRICE } from "@src/shared";
import {
  Breadcrumbs,
  FiltersCatalog,
  SortCatalog,
  BuyTogetherSection,
  PaginationSection,
} from "@components";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import type { Filters } from "@context/catalogContext";
import {
  FilterParamsContext,
  PaginationParamsContext,
  SortParamsContext,
} from "@context/catalogContext";

export default function CatalogLayout(): JSX.Element {
  const [filterParams, setFilterParams] = useState<Filters>({
    rate: [],
    main: ["available"],
    priceFrom: MIN_PRICE,
    priceTo: MAX_PRICE,
  });
  const [sortParams, setSortParams] = useState("popular");
  const [page, setPage] = useState(1);
  const [productNum, setProductNum] = useState(9);
  const [count, setCount] = useState(0);

  console.log(page, productNum, count);
  return (
    <PaginationParamsContext.Provider
      value={{ page, productNum, count, setPage, setProductNum, setCount }}
    >
      <FilterParamsContext.Provider value={{ filterParams, setFilterParams }}>
        <SortParamsContext.Provider value={{ sortParams, setSortParams }}>
          <div className="m-auto p-5 px-10">
            <Breadcrumbs />

            <section className="grid grid-cols-[230px_1fr] gap-3">
              <FiltersCatalog />
              <div>
                <SortCatalog />
                <div>
                  <div className="mt-3 flex flex-wrap justify-between gap-7">
                    <Outlet />
                  </div>
                  <PaginationSection />
                </div>
              </div>
            </section>

            <hr />

            <BuyTogetherSection />
          </div>
        </SortParamsContext.Provider>
      </FilterParamsContext.Provider>
    </PaginationParamsContext.Provider>
  );
}

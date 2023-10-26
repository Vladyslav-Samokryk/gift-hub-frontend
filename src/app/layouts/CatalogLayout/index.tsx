import {
  MAX_PRICE,
  MIN_PRICE,
  PAGINATION_LOAD,
  SCREEN,
  useScreenWidth,
} from "@src/shared";
import {
  Breadcrumbs,
  FiltersCatalog,
  SortCatalog,
  BuyTogetherSection,
  PaginationSection,
  FilterPopUp,
  SortPopUp,
} from "@components";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import type { Filters } from "@context/catalogContext";
import {
  FilterParamsContext,
  PaginationParamsContext,
  SortParamsContext,
} from "@context/catalogContext";
import { useTranslation } from "react-i18next";

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
  const [paginationLoad, setPaginationLoad] = useState(PAGINATION_LOAD.PAGE);

  const [isSortModalActive, setIsSortModalActive] = useState(false);
  const [isFilterModalActive, setIsFilterModalActive] = useState(false);

  const windowWidth = useScreenWidth();
  const { t } = useTranslation();
  return (
    <PaginationParamsContext.Provider
      value={{
        page,
        productNum,
        count,
        setPage,
        setProductNum,
        setCount,
        paginationLoad,
        setPaginationLoad,
      }}
    >
      <FilterParamsContext.Provider value={{ filterParams, setFilterParams }}>
        <SortParamsContext.Provider value={{ sortParams, setSortParams }}>
          <FilterPopUp
            visible={isFilterModalActive}
            setVisible={setIsFilterModalActive}
          />
          <SortPopUp
            visible={isSortModalActive}
            setVisible={setIsSortModalActive}
          />
          <div className="m-auto lg:p-5 lg:px-10">
            <Breadcrumbs />

            <section className="grid grid-cols-1 gap-3 lg:grid-cols-[230px_1fr]">
              {windowWidth > SCREEN.LG ? (
                <FiltersCatalog />
              ) : (
                <div className="flex">
                  <button
                    onClick={() => setIsFilterModalActive(true)}
                    className="additional m-2 w-40 rounded-md border-2 border-gray-600 p-1"
                  >
                    {t("filter_popup_header")}
                  </button>
                  <button
                    onClick={() => setIsSortModalActive(true)}
                    className="additional m-2 w-40 rounded-md border-2 border-gray-600 p-1"
                  >
                    {t("sort_popup_header")}
                  </button>
                </div>
              )}
              <div>
                {windowWidth > SCREEN.LG && <SortCatalog />}
                <div>
                  <div className="mt-3 flex flex-wrap justify-between lg:gap-7">
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

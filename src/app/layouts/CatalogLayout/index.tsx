import {
  ButtonWithIcon,
  DropDown,
  FilterIcon,
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
import { PaginationParamsContext } from "@context/catalogContext";
import { useTranslation } from "react-i18next";
import { useModals } from "@src/app/context/modalContext/useModals";
import { MODALS } from "@src/app/context/modalContext/modals";

export default function CatalogLayout(): JSX.Element {
  const [page, setPage] = useState(1);
  const [productNum, setProductNum] = useState(9);
  const [count, setCount] = useState(0);
  const [paginationLoad, setPaginationLoad] = useState(PAGINATION_LOAD.PAGE);
  const [trigger, setTrigger] = useState(0);
  const { onOpen } = useModals();

  const windowWidth = useScreenWidth();
  const { t } = useTranslation();
  return (
    <PaginationParamsContext.Provider
      value={{
        page,
        productNum,
        count,
        trigger,
        setTrigger,
        setPage,
        setProductNum,
        setCount,
        paginationLoad,
        setPaginationLoad,
      }}
    >
      <div className="m-auto lg:p-5 lg:px-10">
        <Breadcrumbs />

        <section className="grid grid-cols-1 gap-3 lg:grid-cols-[230px_1fr]">
          {windowWidth > SCREEN.LG ? (
            <FiltersCatalog />
          ) : (
            <div className="flex w-full items-center justify-center">
              <ButtonWithIcon
                text={t("filter_popup_header")}
                onClick={() => onOpen({ name: MODALS.FILTER })}
                className="additional m-2 w-40 rounded-md border-2 border-gray-600 bg-white p-1"
              >
                <FilterIcon />
              </ButtonWithIcon>
              <ButtonWithIcon
                text={t("sort_popup_header")}
                onClick={() => onOpen({ name: MODALS.SORT })}
                className="additional m-2 w-40 rounded-md border-2 border-gray-600 bg-white p-1"
              >
                <DropDown />
              </ButtonWithIcon>
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
    </PaginationParamsContext.Provider>
  );
}

import { Outlet } from "react-router-dom";
import { useState } from "react";
import { PaginationParamsContext } from "app/context/catalogContext";
import { useTranslation } from "react-i18next";
import { useModals } from "app/context/modalContext/useModals";
import { MODALS } from "app/context/modalContext/modals";
import ButtonWithIcon from "shared/UI/Buttons/ButtonWithIcon";
import { DropDown } from "shared/assets/svg/Drops";
import { FilterIcon } from "shared/assets/svg/Filter";
import { PAGINATION_LOAD } from "shared/constants/pagination";
import { SCREEN } from "shared/constants/screens";
import { useScreenWidth } from "shared/hooks/useScreenWidth";
import Breadcrumbs from "components/Breadcrumbs";
import BuyTogetherSection from "components/BuyTogetherSection";
import FiltersCatalog from "components/FiltersCatalog";
import PaginationSection from "components/PaginationSection";
import SortCatalog from "components/SortCatalog";

export default function CatalogLayout(): JSX.Element {
  const [page, setPage] = useState(1);
  const [productNum, setProductNum] = useState(9);
  const [count, setCount] = useState(0);
  const [paginationLoad, setPaginationLoad] = useState(PAGINATION_LOAD.PAGE);
  const { onOpen } = useModals();

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
      <div className="m-auto lg:p-5 lg:px-10">
        {windowWidth > SCREEN.LG && <Breadcrumbs />}

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

import { usePaginationParamsContext } from "app/context/catalogContext";

import { useTranslation } from "react-i18next";
import Select from "shared/UI/Select";
import SeeMoreButton from "shared/UI/Buttons/SeeMoreButton";
import Pagination from "shared/UI/Pagination";
import { PAGE_OPTIONS } from "shared/constants/pageOptions";
import { PAGINATION_LOAD } from "shared/constants/pagination";
import { SCREEN } from "shared/constants/screens";
import { useScreenWidth } from "shared/hooks/useScreenWidth";

const PaginationSection = (): JSX.Element => {
  const windowWidth = useScreenWidth();
  const paginationContext = usePaginationParamsContext();
  if (!paginationContext) {
    console.error("Pagination context is null");
    return <></>;
  }
  const { page, setPage, setProductNum, count, productNum, setPaginationLoad } =
    paginationContext;

  const { t } = useTranslation();

  function handleSelect(e: number): void {
    const firstItem = (page - 1) * productNum + 1;
    const newPage = Math.ceil(firstItem / e);
    setPage(newPage);
    setProductNum(e);
    setPaginationLoad(PAGINATION_LOAD.PAGE);
  }

  return (
    <div className="my-6 flex justify-between lg:justify-center">
      {windowWidth >= SCREEN.LG && (
        <Select
          options={PAGE_OPTIONS}
          title={t("select_productNum")}
          onSelect={handleSelect}
        />
      )}
      <div className="flex grow flex-col items-center justify-between lg:flex-row">
        <SeeMoreButton
          onClick={() => {
            setPaginationLoad(PAGINATION_LOAD.PRODUCTS);
            setPage(page + 1);
          }}
          isHidden={Math.ceil(count / productNum) <= page}
        />
        <Pagination
          totalPages={Math.ceil(count / productNum)}
          page={page}
          setPage={setPage}
          onClick={() => {
            setPaginationLoad(PAGINATION_LOAD.PAGE);
            window.scrollTo(0, 0);
          }}
        />
      </div>
    </div>
  );
};

export default PaginationSection;

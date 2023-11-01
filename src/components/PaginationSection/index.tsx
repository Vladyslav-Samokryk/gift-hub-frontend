import { usePaginationParamsContext } from "@src/app/context/catalogContext";
import {
  PAGE_OPTIONS,
  PAGINATION_LOAD,
  Pagination,
  SCREEN,
  SeeMoreButton,
  Select,
  useScreenWidth,
} from "@shared";
import { useTranslation } from "react-i18next";

const PaginationSection = (): JSX.Element => {
  const windowWidth = useScreenWidth();
  const { page, setPage, setProductNum, count, productNum, setPaginationLoad } =
    usePaginationParamsContext();
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

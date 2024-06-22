import { useTranslation } from "react-i18next";
import Select from "shared/UI/Select";
import SeeMoreButton from "shared/UI/Buttons/SeeMoreButton";
import Pagination from "shared/UI/Pagination";
import { PAGE_OPTIONS } from "shared/constants/pageOptions";
import { PAGINATION_LOAD } from "shared/constants/pagination";
import { SCREEN } from "shared/constants/screens";
import { useScreenWidth } from "shared/hooks/useScreenWidth";
import { useAppSelector } from "app/store";
import {
  setPage,
  setProductNum,
  setPaginationLoad,
} from "app/store/slices/catalog";
import { useDispatch } from "react-redux";

const PaginationSection = (): JSX.Element => {
  const windowWidth = useScreenWidth();
  const { page, count, productNum } = useAppSelector((state) => state.catalog);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function handleSelect(e: number): void {
    const firstItem = (page - 1) * productNum + 1;
    const newPage = Math.ceil(firstItem / e);
    dispatch(setPage(newPage));
    dispatch(setProductNum(e));
    dispatch(setPaginationLoad(PAGINATION_LOAD.PAGE));
  }

  function setNewPage(p: number): void {
    dispatch(setPage(p));
  }

  return (
    <div className="my-6 flex justify-between lg:justify-center">
      {windowWidth >= SCREEN.LG && (
        <Select
          options={PAGE_OPTIONS}
          title={t("select_productNum")}
          onSelect={handleSelect}
          productNum={productNum}
        />
      )}
      <div className="flex grow flex-col items-center justify-between lg:flex-row">
        <SeeMoreButton
          onClick={() => {
            dispatch(setPaginationLoad(PAGINATION_LOAD.PRODUCTS));
            dispatch(setPage(page + 1));
          }}
          isHidden={Math.ceil(count / productNum) <= page}
        />
        <Pagination
          totalPages={Math.ceil(count / productNum)}
          page={page}
          setPage={setNewPage}
          onClick={() => {
            dispatch(setPaginationLoad(PAGINATION_LOAD.PAGE));
            window.scrollTo(0, 0);
          }}
        />
      </div>
    </div>
  );
};

export default PaginationSection;

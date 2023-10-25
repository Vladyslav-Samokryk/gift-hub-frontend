import { usePaginationParamsContext } from "@src/app/context/catalogContext";
import {
  PAGE_OPTIONS,
  Pagination,
  SCREEN,
  SeeMoreButton,
  Select,
  useScreenWidth,
} from "@src/shared";
import { useTranslation } from "react-i18next";

const PaginationSection = (): JSX.Element => {
  const windowWidth = useScreenWidth();
  const { page, setPage, setProductNum } = usePaginationParamsContext();
  const { t } = useTranslation();
  return (
    <div className="flex">
      {windowWidth >= SCREEN.LG && (
        <Select
          options={PAGE_OPTIONS}
          title={t("select_productNum")}
          onSelect={setProductNum}
        />
      )}
      <SeeMoreButton
        onClick={() => {
          setPage(page + 1);
        }}
      />
      <Pagination />
    </div>
  );
};

export default PaginationSection;

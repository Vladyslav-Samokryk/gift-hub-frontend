import { usePaginationParamsContext } from "app/context/catalogContext";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import RadioButton from "shared/UI/RadioButton";
import { SCREEN } from "shared/constants/screens";
import { setSearchParam } from "shared/helpers/url";
import { useScreenWidth } from "shared/hooks/useScreenWidth";
import type { TRSorts } from "shared/types/Translation";

export default function SortCatalog(): JSX.Element {
  const { t } = useTranslation();
  const sorts: TRSorts = t("sorts", { returnObjects: true });
  const windowWidth = useScreenWidth();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const paginationContext = usePaginationParamsContext();
  if (!paginationContext) {
    console.error("Pagination context is null");
    return <></>;
  }
  const { setPage } = paginationContext;

  const handleRadioButtonClick = (sort: string): void => {
    navigate(setSearchParam("sort", sort, false));
    setPage(1);
  };

  return (
    <section className="additional flex w-60 flex-col items-center gap-6 divide-y-2 rounded-md bg-white px-1 lg:h-10 lg:w-full lg:flex-row lg:divide-y-0">
      {windowWidth > SCREEN.LG && (
        <p className="text-gray-900">{t("sorts_title")}</p>
      )}
      {Object.keys(sorts).map((sort, i) => {
        return windowWidth > SCREEN.LG ? (
          <button
            key={i}
            type="submit"
            onClick={() => handleRadioButtonClick(sort)}
            className={classNames("px-1", {
              "rounded-full bg-purple-100": searchParams
                .getAll("sort")
                .includes(sort),
            })}
          >
            {sorts[sort as keyof TRSorts]}
          </button>
        ) : (
          <RadioButton
            key={i}
            text={sorts[sort as keyof TRSorts]}
            value={sort}
            onClick={() => {
              handleRadioButtonClick(sort);
            }}
            className={"pt-3"}
            checked={searchParams.getAll("sort").includes(sort)}
          />
        );
      })}
    </section>
  );
}

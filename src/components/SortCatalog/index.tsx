import {
  useScreenWidth,
  type TRSorts,
  SCREEN,
  RadioButton,
  setSearchParam,
  removeSearchParam,
  getSearchParams,
} from "@shared";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { usePaginationParamsContext } from "@src/app/context/catalogContext";

export default function SortCatalog(): JSX.Element {
  const { t } = useTranslation();
  const sorts: TRSorts = t("sorts", { returnObjects: true });
  const windowWidth = useScreenWidth();
  const [selectedSort, setSelectedSort] = useState("");
  const { setTrigger } = usePaginationParamsContext();

  useEffect(() => {
    const searchParams = getSearchParams();
    setSelectedSort(
      Array.isArray(searchParams.sort)
        ? searchParams.sort[0]
        : searchParams.sort,
    );
  }, []);

  const handleRadioButtonClick = (sort: string): void => {
    removeSearchParam("sort");
    setSearchParam("sort", sort);
    setTrigger((prevTrigger) => prevTrigger + 1);
    setSelectedSort(sort);
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
              "rounded-full bg-purple-100": selectedSort === sort,
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
            checked={selectedSort === sort}
          />
        );
      })}
    </section>
  );
}

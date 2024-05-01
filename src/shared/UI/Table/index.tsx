import classNames from "classnames";
import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import type { Children } from "shared/types/CommonTypes";

interface TableProps {
  columns: string[];
  columnsWidth: string[];
  recordsCount: number;
  setPage: Dispatch<SetStateAction<number>>;
  children: Children;
  pageSize?: number;
  page: number;
}

export default function Table({
  columns,
  columnsWidth,
  children,
  recordsCount,
  setPage,
  pageSize = 10,
  page,
}: TableProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-w-full overflow-hidden rounded-md border">
        <div className="min-w-full table-fixed divide-y divide-gray-400">
          <div className="bg-purple-100">
            <div className="flex w-full flex-row divide-x divide-gray-400 break-words">
              {columns.map((header, index) => {
                return (
                  <div
                    key={index}
                    className={classNames(
                      "px-2 py-3 text-center secondary",
                      columnsWidth[index],
                    )}
                  >
                    {t(header)}
                  </div>
                );
              })}
            </div>
          </div>
          {children}
        </div>
      </div>
      <div>
        {Array.from({ length: Math.ceil(recordsCount / pageSize) }).map(
          (_, i) => {
            return (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i + 1)}
                className={classNames({
                  "text-blue-700 mr-1": i + 1 === page,
                })}
              >
                {i + 1}
              </button>
            );
          },
        )}
      </div>
    </>
  );
}

import { useGetUserHistoryQuery } from "app/api/user";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import Table from "shared/UI/Table";
import { EmptyBasketIcon } from "shared/assets/svg/Basket";
import { format } from "date-fns";
import TableItem from "shared/UI/TableItem";
import classNames from "classnames";

export default function UserHistoryPage(): JSX.Element {
  const [cookies] = useCookies();
  const [page, setPage] = useState(1);
  const { data } = useGetUserHistoryQuery({
    token: cookies.access,
    page,
    pageSize: 10,
  });
  const { t } = useTranslation();
  const [columns, setColumns] = useState<string[]>([]);
  const columnsWidth = ["w-[60%]", "w-[20%]", "w-[20%]"];

  useEffect(() => {
    if (data?.results) {
      setColumns(
        Object.keys(data.results[0])
          .slice(1)
          .reverse()
          .map((key) => "history." + key),
      );
    }
  }, [data]);

  return (
    <>
      {data?.results ? (
        <Table
          columns={columns}
          columnsWidth={columnsWidth}
          setPage={setPage}
          recordsCount={data.count}
          page={page}
        >
          <div className="divide-y divide-gray-400">
            {data.results.map((el) => {
              return (
                <div
                  key={el.id}
                  className="flex flex-row divide-x divide-gray-400 break-words"
                >
                  <div className={columnsWidth[0]}>
                    {el.products.map((prod) => {
                      return <TableItem key={prod.product} {...prod} />;
                    })}
                  </div>
                  <div
                    className={classNames(
                      "text-center pt-3 mobile-font md:additional",
                      columnsWidth[1],
                    )}
                  >
                    {format(new Date(el.order_date), "dd.MM.yyyy")}
                  </div>
                  <div
                    className={classNames(
                      "text-center pt-3 mobile-font md:additional",
                      columnsWidth[2],
                      {
                        "text-blue-700": el.status === "staffing",
                        "text-accent-bOrange": el.status === "sending",
                        "text-accent-red": el.status === "returning",
                        "text-black": el.status === "completing",
                      },
                    )}
                  >
                    {t("history.statuses." + el.status)}
                  </div>
                </div>
              );
            })}
          </div>
        </Table>
      ) : (
        <section className="flex flex-col items-center text-secondary-900">
          <EmptyBasketIcon />
          <p className="primary-bold">{t("wishlist.header")}</p>
          <p className="secondary">{t("wishlist.description")}</p>
        </section>
      )}
    </>
  );
}

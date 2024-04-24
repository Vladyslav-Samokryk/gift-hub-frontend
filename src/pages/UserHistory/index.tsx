import { useGetUserHistoryQuery } from "app/api/user";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import Table from "shared/UI/Table";
import { EmptyBasketIcon } from "shared/assets/svg/Basket";
import { format } from "date-fns";

export default function UserHistoryPage(): JSX.Element {
  const [cookies] = useCookies();
  const { data } = useGetUserHistoryQuery({
    token: cookies.access,
    page: 1,
  });
  const { t } = useTranslation();
  const [columns, setColumns] = useState<string[]>([]);

  useEffect(() => {
    if (data?.results) {
      setColumns(
        Object.keys(data.results[0])
          .slice(1)
          .reverse()
          .map((key) => "history." + key),
      );
    }
    console.log(columns);
  }, [data]);

  return (
    <>
      {data?.results ? (
        <Table columns={columns}>
          <tbody className="divide-y divide-gray-400">
            {data.results.map((el) => {
              return (
                <tr key={el.id} className="divide-x divide-gray-400 [&>td]:p-2">
                  <td>
                    {el.products.map((prod) => {
                      return <div key={prod.product}>{prod.name}</div>;
                    })}
                  </td>
                  <td>{format(new Date(el.order_date), "dd.MM.yyyy")}</td>
                  <td>{t("history.statuses." + el.status)}</td>
                </tr>
              );
            })}
          </tbody>
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

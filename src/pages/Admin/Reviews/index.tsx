import { MODALS } from "app/context/modalContext/modals";
import { useModals } from "app/context/modalContext/useModals";
import classNames from "classnames";
import { reviews } from "mock";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { EditIcon } from "shared/assets/svg/Actions";
import Trash from "shared/assets/svg/Trash";
import type { Reviews } from "shared/types/Admin";
import Table from "shared/UI/Table";
import { format } from "date-fns";

function AdminReviews(): JSX.Element {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Reviews[] | []>(reviews);
  const { t } = useTranslation();
  const [columns, setColumns] = useState<string[]>([]);
  const columnsWidth = ["w-[15%]", "w-[30%]", "w-[45%]", "w-[10%]"];
  const { onOpen } = useModals();

  useEffect(() => {
    if (data.length > 0 && data) {
      setColumns([
        ...Object.keys(data[0])
          .slice(1)
          .map((key) => "review." + key),
        "action",
      ]);
    }
  }, [data]);

  function deleteReview(id: string): void {
    setData(data.filter((el) => el.id !== id));
    onOpen({
      name: MODALS.PUSH,
      data: {
        variant: "success",
        message: t("push_notifications.success.default"),
      },
    });
  }
  return (
    <>
      {data.length > 0 && data ? (
        <>
          <Table
            columns={columns}
            columnsWidth={columnsWidth}
            setPage={setPage}
            recordsCount={data.length}
            page={page}
          >
            <div className="divide-y divide-gray-400">
              {data.map((el) => {
                return (
                  <div
                    key={el.id}
                    className="mobile-font xl:secondary flex flex-row divide-x divide-gray-400 break-all"
                  >
                    <div
                      className={classNames(columnsWidth[0], "p-3 text-center")}
                    >
                      {format(new Date(el.date), "dd.MM.yyyy")}
                    </div>
                    <div
                      className={classNames(columnsWidth[1], "p-3 text-center")}
                    >
                      {el.user_name}
                    </div>
                    <div className={classNames(columnsWidth[2], "p-3")}>
                      {el.review}
                    </div>
                    <div
                      className={classNames(
                        columnsWidth[3],
                        "flex justify-around p-3",
                      )}
                    >
                      <Link to={`/admin/reviewAnswer/${el.id}`}>
                        <EditIcon />
                      </Link>
                      <div onClick={() => deleteReview(el.id)}>
                        <Trash />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Table>
        </>
      ) : (
        <section className="flex h-[40vh] flex-col items-center justify-center text-secondary-900">
          <p className="primary-bold">{t("review_empty")}</p>
        </section>
      )}
    </>
  );
}

export default AdminReviews;

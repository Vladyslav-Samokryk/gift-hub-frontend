import { MODALS } from "app/context/modalContext/modals";
import { useModals } from "app/context/modalContext/useModals";
import classNames from "classnames";
import { managers } from "mock";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Table from "shared/UI/Table";
import { EmptyBasketIcon } from "shared/assets/svg/Basket";
import { BlueClose } from "shared/assets/svg/CloseIcons";
import { Plus } from "shared/assets/svg/Plus";
import { Search } from "shared/assets/svg/Search";
import Trash from "shared/assets/svg/Trash";
import type { AddManagerValue, Manager } from "shared/types/Admin";

function AdminManagers(): JSX.Element {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [data, setData] = useState<Manager[] | []>(managers);
  const { t } = useTranslation();
  const [columns, setColumns] = useState<string[]>([]);
  const columnsWidth = ["w-[30%]", "w-[30%]", "w-[20%]", "w-[15%]", "w-[10%]"];
  const { onOpen } = useModals();

  useEffect(() => {
    if (data.length > 0 && data) {
      setColumns([
        ...Object.keys(data[0])
          .slice(1)
          .map((key) => "manager." + key),
        "",
      ]);
    }
  }, [data]);

  function deleteManager(email: string): void {
    setData(data.filter((el) => el.email !== email));
    onOpen({
      name: MODALS.PUSH,
      data: {
        variant: "success",
        message: t("push_notifications.success.default"),
      },
    });
  }

  function searchManager(filter: string): void {
    setSearch(filter);
    setData(managers.filter((el) => el.name.includes(filter)));
  }

  function filterManager(e: any): void {
    setData(
      e.target.checked
        ? data.filter((el) => el.online === e.target.checked)
        : managers,
    );
  }

  function openAddManagerModal(): void {
    onOpen({
      name: MODALS.ADD_MANAGER,
      data: {
        onAdd: (el: AddManagerValue) => {
          const newManager: Manager = {
            id: "123",
            name: el.name,
            email: el.email,
            orders: 0,
            online: false,
          };
          setData([...data, newManager]);
        },
      },
    });
  }

  return (
    <>
      <div className="flex mb-3">
        <section className="group flex grow items-center rounded-l-lg border-r-transparent border border-black bg-white p-1 text-center">
          <button>
            <Search />
          </button>
          <input
            className="grow bg-transparent p-1 outline-none"
            placeholder={t("ph_search")}
            type="text"
            name="search"
            value={search}
            onChange={(e) => searchManager(e.target.value)}
          />
          {search ? (
            <button onClick={() => setSearch("")} className="pr-1">
              <BlueClose />
            </button>
          ) : null}
        </section>
        <button
          type="button"
          className="btn-effect btn rounded-r-lg border-black border text-black bg-purple-100 px-6 pb-1 pt-0 text-3xl font-light"
          onClick={openAddManagerModal}
        >
          +
        </button>
      </div>
      <div className="mb-3 flex content-center gap-1">
        <input id="status" type="checkbox" onChange={filterManager} />
        <label htmlFor="status">{t("status.online")}</label>
      </div>
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
                    key={el.name}
                    className="secondary flex flex-row divide-x divide-gray-400 break-all mobile-font xl:secondary"
                  >
                    <div className={classNames(columnsWidth[0], "p-3")}>
                      {el.name}
                    </div>
                    <div className={classNames(columnsWidth[1], "p-3")}>
                      {el.email}
                    </div>
                    <div
                      className={classNames(columnsWidth[2], "p-3 text-center")}
                    >
                      {el.orders}
                    </div>
                    <div
                      className={classNames(
                        columnsWidth[3],
                        "text-center p-3",
                        {
                          "text-accent-green": el.online,
                          "text-gray-900": !el.online,
                        },
                      )}
                    >
                      {el.online ? t("status.online") : t("status.offline")}
                    </div>
                    <div
                      className={classNames(
                        columnsWidth[4],
                        "flex justify-center p-3",
                      )}
                      onClick={() => deleteManager(el.email)}
                    >
                      <Trash />
                    </div>
                  </div>
                );
              })}
            </div>
          </Table>
        </>
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

export default AdminManagers;

import { MODALS } from "app/context/modalContext/modals";
import { useModals } from "app/context/modalContext/useModals";
import classNames from "classnames";
import { managers } from "mock";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Table from "shared/UI/Table";
import { BlueClose } from "shared/assets/svg/CloseIcons";
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
        "action",
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
      <div className="mb-3 flex">
        <section className="group flex grow items-center rounded-l-lg border border-black border-r-transparent bg-white p-1 text-center">
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
          className="btn rounded-r-lg border border-black bg-purple-100 px-6 pb-1 pt-0 text-3xl font-light text-black hover:bg-purple-900 hover:text-white"
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
                    className="secondary mobile-font xl:secondary flex flex-row divide-x divide-gray-400 break-all"
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
        <section className="flex h-[40vh] flex-col items-center justify-center text-secondary-900">
          <p className="primary-bold">{t("manager_empty")}</p>
        </section>
      )}
    </>
  );
}

export default AdminManagers;

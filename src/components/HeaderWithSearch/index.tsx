import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import UserSection from "components/UserSection";
import { useNavigate } from "react-router-dom";
import { useModals } from "app/context/modalContext/useModals";
import { MODALS } from "app/context/modalContext/modals";
import { BlueClose } from "shared/assets/svg/CloseIcons";
import { Present } from "shared/assets/svg/Present";
import { setSearchParam } from "shared/helpers/url";
import { Catalog } from "shared/assets/svg/Catalog";
import { Search } from "shared/assets/svg/Search";

const HeaderWithSearch = (): JSX.Element => {
  const { t } = useTranslation();
  const [search, setSearch] = useState(localStorage.getItem("search") ?? "");
  const { onOpen } = useModals();

  const navigate = useNavigate();

  const navigateSearch = (): void => {
    const searchParams = window.location.search;
    let newUrl = "";
    if (search.trim() !== "") {
      newUrl = `/search/?q=${search}&sort=popular`;
      if (searchParams.length) {
        newUrl = setSearchParam("q", search, false);
      }
      navigate(newUrl);
    }
  };

  useEffect(() => {
    localStorage.setItem("search", search);
  }, [search]);
  return (
    <>
      <section className="relative mb-6 mt-8 flex h-28 items-start justify-between px-10 lg:mb-1 lg:h-fit">
        <button
          className="group flex items-center self-center"
          onClick={() => onOpen({ name: MODALS.CATALOG })}
        >
          <Catalog />
          <p className="lg:h6 additional pl-1">{t("header_links.catalog")}</p>
        </button>

        <section className="group absolute -bottom-4 left-1/2 flex w-80 translate-x-[-50%] items-center rounded-lg border border-black bg-white p-1 text-center lg:static lg:w-96 lg:translate-x-0">
          <button onClick={navigateSearch}>
            <Search />
          </button>
          <input
            className="grow bg-transparent p-1 outline-none"
            placeholder={t("ph_search")}
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.code === "Enter" && navigateSearch()}
          />
          {search ? (
            <button onClick={() => setSearch("")} className="pr-1">
              <BlueClose />
            </button>
          ) : null}
        </section>

        <section className="group absolute left-1/2 top-0 flex w-max translate-x-[-50%] items-center lg:static lg:translate-x-0">
          <button
            className="group flex items-center"
            onClick={() => navigate("/secret-gift")}
          >
            <p className="lg:h6 additional pr-1 group-hover:text-accent-turkus">
              {t("header_links.secret_present")}
            </p>
            <Present />
          </button>
        </section>
        <UserSection />
      </section>
    </>
  );
};

export default HeaderWithSearch;

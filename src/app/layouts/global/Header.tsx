import { useState } from "react";
import {
  Logo,
  BlueClose,
  Catalog,
  Present,
  Basket,
  Wishlist,
  UserAccount,
  Search,
} from "@shared";
import type { CatalogSub } from "@src/shared";
import {
  LanguageToggle,
  CatalogPopUp,
  CategoryPopUp,
  LoginPopUp,
  NavigationByRole,
  RegistrationPopUp,
} from "@components";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

export default function Header(): JSX.Element {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [catalogVisible, setCatalogVisible] = useState(false);
  const [loginPopUp, setLoginPopUp] = useState(false);
  const [registrPopUp, setRegistrPopUp] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState<CatalogSub>({
    visible: false,
    title: "",
    sub: [],
  });

  const navigate = useNavigate();
  return (
    <header>
      <section className="flex w-full items-center justify-between bg-white px-5 pb-6 shadow-main lg:px-20">
        <Logo className="h-[31px] w-[47px] self-end lg:h-[79px] lg:w-[110px]" />
        <NavigationByRole />
        <LanguageToggle />
      </section>
      <CatalogPopUp
        visible={catalogVisible}
        setVisible={setCatalogVisible}
        setCategoryVisible={setCategoryVisible}
      />
      <CategoryPopUp
        popUp={categoryVisible}
        setPopUp={setCategoryVisible}
        onBack={() => {
          setCatalogVisible(true);
          setCategoryVisible((prev) => {
            return { ...prev, visible: false };
          });
        }}
      />
      <section className="relative mb-6 mt-8 flex h-28 items-start justify-between px-10 lg:mb-1 lg:h-fit">
        <button
          className="group flex items-center self-center"
          onClick={() => setCatalogVisible(true)}
        >
          <Catalog />
          <p className="lg:h6 additional pl-1">{t("header_links.catalog")}</p>
        </button>

        <section className="group absolute -bottom-4 left-1/2 flex w-80 translate-x-[-50%] items-center rounded-lg border border-black bg-white p-1 text-center lg:static lg:w-96 lg:translate-x-0">
          <Link to={"/search/" + search}>
            <Search />
          </Link>
          <input
            className="grow bg-transparent p-1 outline-none"
            placeholder={t("ph_search")}
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) =>
              e.code === "Enter" &&
              search.trim() !== "" &&
              navigate("/search/" + search)
            }
          />
          {search ? (
            <button onClick={() => setSearch("")} className="pr-1">
              <BlueClose />
            </button>
          ) : null}
        </section>

        <section className="group absolute left-1/2 top-0 flex w-max translate-x-[-50%] items-center lg:static lg:translate-x-0">
          <p className="lg:h6 additional pr-1 group-hover:text-accent-turkus">
            {t("header_links.secret_present")}
          </p>
          <button className="group">
            <Present />
          </button>
        </section>

        <LoginPopUp
          visible={loginPopUp}
          setVisible={setLoginPopUp}
          goToRegistr={setRegistrPopUp}
        />
        <RegistrationPopUp
          visible={registrPopUp}
          setVisible={setRegistrPopUp}
        />

        <section className="flex w-36 justify-between self-center">
          <button
            className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-900"
            onClick={() => setLoginPopUp((prev) => !prev)}
          >
            <UserAccount />
          </button>
          <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-900">
            <Wishlist />
          </button>
          <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-900">
            <Basket type="sm" className="fill-black group-hover:fill-white" />
          </button>
        </section>
      </section>
    </header>
  );
}

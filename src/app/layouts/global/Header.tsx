import { useState } from "react";
import { Logo, useTypedTranslation, BlueClose, Catalog, Present, Basket, Wishlist, UserAccount, Search } from "@shared";
import { LanguageToggle, NavigationByRole } from "@components";

export default function Header (): JSX.Element {
  const t = useTypedTranslation();
  const [search, setSearch] = useState("");

  return (
    <header>
      <section className="flex items-center justify-between bg-white px-20 pb-6" style={{ boxShadow: "0 4px 20px rgba(50, 64, 161, 0.5)" }}>
        <Logo/>
        <NavigationByRole/>
        <LanguageToggle/>
      </section>
      <section className="mt-10 flex items-center justify-between px-10">
        <button className="group flex items-center">
          <Catalog/>
          <p className="h6 pl-1">{t("catalog")}</p>
        </button>
        <section className="group flex w-96 items-center rounded-md border border-black p-1">
          <Search/>
          <input className="grow p-1 outline-none" placeholder={t("search")} type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
          {search
            ? <button onClick={() => setSearch("")} className="pr-1">
              <BlueClose/>
            </button>
            : null
          }
        </section>
        <section className="group flex items-center">
          <p className="h6 pr-1 group-hover:text-accent-turkus">{t("secretPresent")}</p>
          <button className="group">
            <Present/>
          </button>
        </section>
        <section className="flex w-36 justify-between">
          <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-deepBlue">
            <UserAccount/>
          </button>
          <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-deepBlue">
            <Wishlist/>
          </button>
          <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-deepBlue">
            <Basket type="sm" className="group-hover:fill-white fill-black"/>
          </button>
        </section>
      </section>
    </header>
  );
}

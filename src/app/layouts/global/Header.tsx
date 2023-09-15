import { useState } from "react";
import { Logo, useTypedTranslation, BlueClose, Catalog, Present, Basket, Wishlist, UserAccount, Search } from "@shared";
import { LanguageToggle, LoginPopUp, NavigationByRole, RegistrationPopUp } from "@components";

export default function Header (): JSX.Element {
  const t = useTypedTranslation();
  const [search, setSearch] = useState("");
  const [loginPopUp, setLoginPopUp] = useState(false);

  return (
    <header>
      <section className="flex w-full items-center justify-between bg-white px-5 pb-6 shadow-main md:px-20" >
        <Logo className="h-[31px] w-[47px] self-end md:h-[79px] md:w-[110px]"/>
        <NavigationByRole/>
        <LanguageToggle/>
      </section>

      <section className="relative mb-6 mt-8 flex h-28 items-start justify-between px-10 md:mb-1 md:h-fit">
        <button className="group flex items-center self-center">
          <Catalog/>
          <p className="md:h6 additional pl-1">{t("catalog")}</p>
        </button>

        <section className="group absolute -bottom-4 left-1/2 flex w-80 translate-x-[-50%] items-center rounded-md border border-black p-1 text-center md:static md:w-96 md:translate-x-0">
          <Search/>
          <input className="grow p-1 outline-none" placeholder={t("search")} type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
          {search
            ? <button onClick={() => setSearch("")} className="pr-1">
              <BlueClose/>
            </button>
            : null
          }
        </section>

        <section className="group absolute left-1/2 top-0 flex w-max translate-x-[-50%] items-center md:static md:translate-x-0">
          <p className="md:h6 additional pr-1 group-hover:text-accent-turkus">{t("secretPresent")}</p>
          <button className="group">
            <Present/>
          </button>
        </section>

        <RegistrationPopUp visible={loginPopUp} setVisible={setLoginPopUp}/>

        <section className="flex w-36 justify-between self-center">
          <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-deepBlue" onClick={() => setLoginPopUp(prev => !prev)}>
            <UserAccount/>
          </button>
          <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-deepBlue">
            <Wishlist/>
          </button>
          <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-deepBlue">
            <Basket type="sm" className="fill-black group-hover:fill-white"/>
          </button>
        </section>
      </section>
    </header>
  );
}

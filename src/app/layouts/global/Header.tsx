import { useState } from "react";

import { Logo, useTypedTranslation } from "@shared";

import { LanguageToggle } from "@src/components";

export default function Header (): JSX.Element {
  const t = useTypedTranslation();
  // const role = useAppSelector(state => state.user.role);
  const [search, setSearch] = useState("");

  return (
    <header>
      <div className="flex justify-between bg-background-header px-[5%] items-center">
        <Logo/>
        <LanguageToggle/>
      </div>

      <svg className="" width="100%" viewBox="0 0 20 0.5">
        <path
          d="M 0 0.2 C 4.5 0.5 5 0 9 0 C 14 0 15.4 0.6 20 0.2 L 20 0 L 0 0 L 0 0.2"
          fill="#E8E6F3"
        >
        </path>
      </svg>

      <div className="flex justify-between items-center px-[5%]">
        <button className="group flex items-center">
          <div className="button-icon bg-[url('icons/catalog.svg')] group-hover:bg-[url('icons/catalog-hover.svg')]"></div>
          <p className="pl-1 rubik-300 text-[24px]">{t("catalog")}</p>
        </button>

        <div className="w-[500px] p-1 flex items-center border-black border rounded-md">
          <div className="button-icon flex-none bg-[url('icons/search.svg')]"></div>
          <input className="p-1 grow outline-none" placeholder="Пошук" type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
          {search &&
            <button className="button-icon flex-none bg-[url('icons/blue-close.svg')]" onClick={() => setSearch("")}></button>
          }
        </div>

        <div className="group flex items-center">
          <p className="pr-1 rubik-300 text-[24px] group-hover:text-[#00BCD4]">{t("secretPresent")}</p>
          <button className="button-icon bg-[url('icons/present.svg')] group-hover:bg-[url('icons/present-hover.svg')]">
          </button>

        </div>
        <div className="flex justify-between w-[150px]">
          <button className="group hover:bg-[#222D4A] hover:rounded-full">
            <div className="button-icon bg-[url('icons/user-account.svg')] group-hover:bg-[url('icons/user-account-hover.svg')]"></div>
          </button>
          <button className="button-icon bg-[url('icons/wishlist.svg')] hover:bg-[url('icons/wishlist-hover.svg')]"></button>
          <button className="button-icon bg-[url('icons/basket.svg')]"></button>
        </div>
      </div>
    </header>

  );
}

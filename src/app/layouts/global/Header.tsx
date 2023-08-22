import { useState } from "react";
import { Logo, useTypedTranslation, BlueClose, Catalog, Present, Basket, Wishlist, UserAccount, Search } from "@shared";
import { LanguageToggle, RoleLink } from "@src/components";

export default function Header (): JSX.Element {
  const t = useTypedTranslation();
  const [search, setSearch] = useState("");

  return (
    <header>
      <div className="flex justify-between relative z-10 bg-white px-[5%] items-center">
        <Logo/>
        <RoleLink/>
        <LanguageToggle/>
      </div>
      <svg className="relative z-0 -top-[0.5rem]" width="100%" viewBox="0 0 20 0.7" style={{ filter: "drop-shadow(0px 4px 20px rgba(50, 64, 161, 0.5))" }}>
        <path
          d="M 0 0.4 C 4.5 0.8 5 0.3 9 0.3 C 14 0.3 15.4 0.8 20 0.4 L 20 0 L 0 0"
          fill="white"
        >
        </path>
      </svg>
      <div className="flex justify-between items-center px-[5%] mt-4">
        <button className="flex items-center catalog-icon">
          <Catalog/>
          <p className="pl-1 h6">{t("catalog")}</p>
        </button>
        <div className="search-icon w-[500px] p-1 flex items-center border-black border rounded-md">
          <Search/>
          <input className="p-1 grow outline-none" placeholder={t("search")} type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
          {search &&
            <button onClick={() => setSearch("")} className="pr-1">
              <BlueClose/>
            </button>
          }
        </div>
        <div className="group present-icon flex items-center">
          <p className="pr-1 h6 group-hover:text-accent-turkus">{t("secretPresent")}</p>
          <button>
            <Present/>
          </button>
        </div>
        <div className="flex justify-between w-[150px]">
          <button className="user-icon flex justify-center items-center hover:bg-deepBlue rounded-full w-9 h-9">
            <UserAccount/>
          </button>
          <button className="wishlist-icon flex justify-center items-center hover:bg-deepBlue rounded-full w-9 h-9">
            <Wishlist/>
          </button>
          <button className="basket-icon flex justify-center items-center hover:bg-deepBlue rounded-full w-9 h-9">
            <Basket/>
          </button>
        </div>
      </div>
    </header>
  );
}

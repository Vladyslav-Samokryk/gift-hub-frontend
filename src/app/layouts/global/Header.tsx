import type { ChangeEvent, MouseEvent, MouseEventHandler, ReactElement } from "react";
import { changeLanguage } from "i18next";
import { Link } from "react-router-dom";

import { useAppDispatch } from "@store";
import { useTypedNavigate, useTypedTranslation } from "@shared";
import { authUser } from "@src/app/store/slices/user";
// import { useLoginMutation } from "@src/app/api/auth";

export default function Header (): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useTypedNavigate();
  const t = useTypedTranslation();
  // const [login] = useLoginMutation();

  const handleChangeLanguage = (event: MouseEvent<HTMLButtonElement>): void => {
    const { name } = event.target as HTMLButtonElement;
    void changeLanguage(name);
  };

  const loginHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    dispatch(authUser({
      isAuth: true,
    }));
    // navigate("/");
    // try {
    //   void login({
    //     password: "",
    //     username: "",
    //   }).unwrap();
    // } catch (error) {
    //   console.log({
    //     error,
    //   });
    // }
  };

  const logoutHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    dispatch(authUser({
      isAuth: false,
    }));
    // navigate("/");
    // try {
    //   void login({
    //     password: "",
    //     username: "",
    //   }).unwrap();
    // } catch (error) {
    //   console.log({
    //     error,
    //   });
    // }
  };

  return (
    <header className="flex justify-between p-3 bg-[#D9D9D9]">
      <p>Logo</p>
      <div className="flex">
        <Link to={"/about-us"}>{t("aboutAs")}</Link>
        <Link to={"/contacts"}>{t("contacts")}</Link>
      </div>
      <div>
        {(["en", "uk"] as TranslationKeys[]).map((language, index) => (
          <button
            key={language}
            name={language}
            onClick={handleChangeLanguage}
          >
            {t(language)}
            {index === 0 ? "|" : ""}
          </button>),
        )}
      </div>
      <div>
        <button type="button" onClick={loginHandler}>Login</button>
        <button type="button" onClick={logoutHandler}>Logout</button>
        {/* <button type="button" onClick={() => navigate("/shopping-cart")}>Go Shopping Cart</button> */}
        {/* <button type="button" onClick={() => navigate("/")}>Go Main</button> */}
      </div>
    </header>
  );
}

import type { ChangeEvent, MouseEvent } from "react";
import { changeLanguage } from "i18next";

import { useAppDispatch } from "@store";
import { useTypedNavigate, useTypedTranslation } from "@shared";
import { authUser } from "@src/app/store/slices/user";
// import { useLoginMutation } from "@src/app/api/auth";

export default function Header (): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useTypedNavigate();
  const t = useTypedTranslation();
  // const [login] = useLoginMutation();

  const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>): void => {
    void changeLanguage(event.target.value);
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
    <div>
      <h2>{t("header")}</h2>
      <select onChange={handleChangeLanguage}>
        <option value="en">{"EN"}</option>
        <option value="uk">{"UK"}</option>
      </select>
      <button type="button" onClick={loginHandler}>Login</button>
      <button type="button" onClick={logoutHandler}>Logout</button>
      <button type="button" onClick={() => navigate("/shopping-cart")}>Go Shopping Cart</button>
      <button type="button" onClick={() => navigate("/")}>Go Main</button>
    </div>
  );
}

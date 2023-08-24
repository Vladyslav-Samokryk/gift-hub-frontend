import type { ChangeEvent, MouseEvent, MouseEventHandler, ReactElement } from "react";
import { changeLanguage } from "i18next";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@store";
import { ADMIN, GUEST_USER, MANAGER, useTypedNavigate, useTypedTranslation } from "@shared";
import { authUser, setRole } from "@src/app/store/slices/user";
import type { RoleUnion } from "@src/shared/types/User";
// import { useLoginMutation } from "@src/app/api/auth";

function LogButtons (): JSX.Element {
  const navigate = useTypedNavigate();
  const dispatch = useAppDispatch();
  // const [login] = useLoginMutation();

  const loginHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    // get role to check role action
    const role = prompt("enter your role", "");

    if (role === MANAGER) {
      dispatch(setRole({
        role: MANAGER,
      }));
    } else if (role === ADMIN) {
      dispatch(setRole({
        role: ADMIN,
      }));
    }

    dispatch(authUser({
      isAuth: true,
    }));

    navigate("/");

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
    // set role to default when logout
    dispatch(setRole({
      role: GUEST_USER,
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
      <button type="button" onClick={loginHandler}>Login</button>
      <button type="button" onClick={logoutHandler}>Logout</button>
    </div>
  );
}

function LanguageToggle (): JSX.Element {
  const t = useTypedTranslation();

  const handleChangeLanguage = (event: MouseEvent<HTMLButtonElement>): void => {
    const { name } = event.target as HTMLButtonElement;
    void changeLanguage(name);
  };

  return (
    <>
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
    </>

  );
}

const RoleLink = ({ role }: { role: RoleUnion; }): JSX.Element => {
  const t = useTypedTranslation();
  switch (role) {
    case MANAGER: {
      return <Link to={"/catalog-for-manager"}>{t("catalog")}</Link>;
    }
    case ADMIN: {
      return <Link to={"/catalog-for-admin"}>{t("catalog")}</Link>;
    }
    default: {
      return (
        <>
          <Link to={"/about-us"}>{t("aboutAs")}</Link>
          <Link to={"/contacts"}>{t("contacts")}</Link>
        </>
      );
    }
  }
};

export default function Header (): JSX.Element {
  const role = useAppSelector(state => state.user.role);
  return (
    <header className="flex justify-between bg-[#D9D9D9] p-3">
      <p>Logo</p>
      <div className="flex">
        <div>
          <LanguageToggle/>
          <RoleLink role={role}/>
          <LogButtons/>
        </div>
      </div>
    </header>
  );
}

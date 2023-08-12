import type { ChangeEvent, MouseEvent, MouseEventHandler, ReactElement } from "react";
import { changeLanguage } from "i18next";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@store";
import { useTypedNavigate, useTypedTranslation } from "@shared";
import { authUser, setRole } from "@src/app/store/slices/user";
// import { useLoginMutation } from "@src/app/api/auth";

function LogButtons (): JSX.Element {
  const navigate = useTypedNavigate();
  const dispatch = useAppDispatch();
  // const [login] = useLoginMutation();

  const loginHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    // get role to check role action
    const role = prompt("enter your role", "");

    if (role === "manager") {
      dispatch(setRole({
        role: "manager",
      }));
    } else if (role === "admin") {
      dispatch(setRole({
        role: "admin",
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
      role: "buyer",
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
      <button className="text-primary" type="button" onClick={loginHandler}>Login</button>
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
          className={index === 0 ? "text-primary-200" : "text-primary-500"}
          key={language}
          name={language}
          onClick={handleChangeLanguage}
        >
          {t(language)}
          {index === 0
            ? (
              <span className="text-black">|</span>
            )
            : ""}
        </button>),
      )}
    </>

  );
}

export default function Header (): JSX.Element {
  const t = useTypedTranslation();
  const role = useAppSelector(state => state.user.role);
  return (
    <header className="flex justify-between p-3 bg-background-header bg-gradient-radial shadow-randomize-result">
      <p className="">Logo</p>
      <div className="flex font-exo2">
        {(!role || role === "buyer") &&
          <>
            <Link to={"/about-us"}>{t("aboutAs")}</Link>
            <Link to={"/contacts"}>{t("contacts")}</Link>
          </>
        }

        {role === "manager" &&
          <Link to={"/catalog-for-manager"}>{t("catalog")}</Link>
        }

        {role === "admin" &&
          <Link to={"/catalog-for-admin"}>{t("catalog")}</Link>
        }
        <div className="font-rubik">
          <LanguageToggle/>
          <LogButtons/>
        </div>
      </div>
    </header>
  );
}

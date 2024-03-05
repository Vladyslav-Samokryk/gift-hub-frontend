import { setIsAuth } from "app/store/slices/user";
import classNames from "classnames";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import localStorage from "redux-persist/es/storage";
import { SCREEN } from "shared/constants/screens";
import { useScreenWidth } from "shared/hooks/useScreenWidth";
import type { TRCabinet } from "shared/types/Translation";

const cabinetSection: Array<{
  key: string;
  path: string;
}> = [
  {
    key: "cabinetSection_2",
    path: "",
  },
  {
    key: "cabinetSection_3",
    path: "/address",
  },
  {
    key: "cabinetSection_4",
    path: "/security",
  },
  {
    key: "cabinetSection_5",
    path: "/wishlist",
  },
  {
    key: "cabinetSection_1",
    path: "/history",
  },
];

const UserCabinetLayout = (): JSX.Element => {
  const [, , removeCookie] = useCookies(["access", "refresh"]);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const cabinetLinks: TRCabinet = t("cabinet_section", {
    returnObjects: true,
  });
  const url = window.location.toString();
  const windowWidth = useScreenWidth();

  const logout = (): void => {
    void localStorage.removeItem("user_id");
    dispatch(setIsAuth({ isAuth: false }));
    removeCookie("access");
    removeCookie("refresh");
  };

  return (
    <section className="m-auto mb-10 grid w-[90vw] md:grid-cols-[6fr_15fr] md:gap-5 [&_div]:h-max [&_div]:rounded-md [&_div]:bg-white [&_div]:p-5 [&_div]:shadow-drop">
      {windowWidth > SCREEN.MD && (
        <div>
          <ul className="flex flex-col gap-3">
            {cabinetSection.map(({ key, path }, index: number) => (
              <li key={key}>
                <Link
                  to={"/user" + path}
                  className={classNames("secondary", {
                    "text-blue-700":
                      index === 0
                        ? url.match(/(\/user)$/gm)
                        : url.includes(path),
                  })}
                >
                  {Object.values(cabinetLinks)[index]}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to={"/"}
                className="secondary text-accent-red"
                onClick={logout}
              >
                {t("logout")}
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default UserCabinetLayout;

/* eslint-disable @typescript-eslint/no-empty-function */
import { MODALS } from "app/context/modalContext/modals";
import { useModals } from "app/context/modalContext/useModals";
import { setIsAuth } from "app/store/slices/user";
import classNames from "classnames";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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

interface UserCabinetNavigationProps {
  onClose?: () => void;
}

export default function UserCabinetNavigation({
  onClose = () => {},
}: UserCabinetNavigationProps): JSX.Element {
  const [, , removeCookie] = useCookies(["access", "refresh"]);
  const dispatch = useDispatch();
  const { onOpen } = useModals();

  const { t } = useTranslation();
  const cabinetLinks: TRCabinet = t("cabinet_section", {
    returnObjects: true,
  });
  const url = window.location.toString();

  const logout = (): void => {
    void localStorage.removeItem("user_id");
    dispatch(setIsAuth({ isAuth: false }));
    removeCookie("access");
    removeCookie("refresh");
    onOpen({
      name: MODALS.PUSH,
      data: {
        variant: "success",
        message: t("push_notifications.success.default"),
      },
    });
  };

  return (
    <div>
      <ul className="flex flex-col gap-3">
        {cabinetSection.map(({ key, path }, index: number) => (
          <li key={key}>
            <Link
              to={"/user" + path}
              className={classNames("secondary", {
                "text-blue-700":
                  index === 0 ? url.match(/(\/user)$/gm) : url.includes(path),
              })}
              onClick={onClose}
            >
              {Object.values(cabinetLinks)[index]}
            </Link>
          </li>
        ))}
        <li>
          <Link to={"/"} className="secondary text-accent-red" onClick={logout}>
            {t("logout")}
          </Link>
        </li>
      </ul>
    </div>
  );
}

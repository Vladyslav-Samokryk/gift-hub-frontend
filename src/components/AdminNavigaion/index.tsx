/* eslint-disable @typescript-eslint/no-empty-function */
import { MODALS } from "app/context/modalContext/modals";
import { useModals } from "app/context/modalContext/useModals";
import { setIsAuth } from "app/store/slices/user";
import classNames from "classnames";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DownStep, UpStep } from "shared/assets/svg/Arrows";
import type { TRAdmin, TRHelp } from "shared/types/Translation";

const adminSection: Array<{
  key: string;
  path: string;
}> = [
  {
    key: "cabinetSection_1",
    path: "/managers",
  },
  {
    key: "cabinetSection_2",
    path: "/reviews",
  },
  {
    key: "cabinetSection_3",
    path: "/orders",
  },
  {
    key: "cabinetSection_4",
    path: "/products",
  },
  {
    key: "cabinetSection_5",
    path: "/history",
  },
  {
    key: "cabinetSection_6",
    path: "/categories",
  },
  {
    key: "cabinetSection_7",
    path: "/banners",
  },
  {
    key: "cabinetSection_8",
    path: "/contacts",
  },
];

const FAQSection: Array<{
  key: string;
  path: string;
}> = [
  {
    key: "Section_1",
    path: "/offer_contract",
  },
  {
    key: "Section_2",
    path: "/payment_delivery",
  },
  {
    key: "Section_3",
    path: "/return_conditions",
  },
  {
    key: "Section_4",
    path: "/privacy_policy",
  },
];

interface UserCabinetNavigationProps {
  onClose?: () => void;
}

export default function AdminNavigation({
  onClose = () => {},
}: UserCabinetNavigationProps): JSX.Element {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [, , removeCookie] = useCookies(["access", "refresh"]);
  const dispatch = useDispatch();
  const { onOpen } = useModals();

  const { t } = useTranslation();
  const cabinetLinks: TRAdmin = t("admin_section", {
    returnObjects: true,
  });
  const FAQLinks: TRHelp = t("help_section", {
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
        {adminSection.map(({ key, path }, index: number) => (
          <li key={key}>
            <Link
              to={"/admin" + path}
              className={classNames("secondary", {
                "text-blue-700":
                  index === 0 ? url.match(/(\/admin)$/gm) : url.includes(path),
              })}
              onClick={onClose}
            >
              {Object.values(cabinetLinks)[index]}
            </Link>
          </li>
        ))}
        <li>
          <ul>
            <li
              className="flex justify-between"
              onClick={() => setIsFaqOpen((prev) => !prev)}
            >
              <p className={classNames("secondary")}>FAQ</p>
              {isFaqOpen ? <UpStep /> : <DownStep />}
            </li>
            {isFaqOpen ? (
              <ul>
                {FAQSection.map(({ key, path }, index: number) => (
                  <li key={key}>
                    <Link
                      to={"/admin" + path}
                      className={classNames("secondary", {
                        "text-blue-700": url.includes(path),
                      })}
                      onClick={onClose}
                    >
                      {Object.values(FAQLinks)[index]}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </ul>
        </li>
        <li>
          <Link to={"/"} className="secondary text-accent-red" onClick={logout}>
            {t("logout")}
          </Link>
        </li>
      </ul>
    </div>
  );
}

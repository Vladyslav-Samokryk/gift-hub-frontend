import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

function getPathArray(pathname: string): string[] {
  const pathArray: string[] = pathname.split("/");
  pathArray[0] = "main_page";
  if (pathArray[1] === "catalog") {
    pathArray[1] = "bc.by_category";
    pathArray[2] = "categories." + pathArray[2];
  } else {
    pathArray[1] = "bc.by_search_name";
    pathArray[2] = pathArray[2][0].toUpperCase() + pathArray[2].slice(1);
  }
  return pathArray;
}

export default function Breadcrumbs(): JSX.Element {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const pathArray = getPathArray(pathname);
  return (
    <section className="mb-8 flex">
      {pathArray.map((path, index) => {
        return (
          <>
            <Link
              className={classNames("secondary mx-1 font-light", {
                "font-semibold text-blue-700": index === pathArray.length - 1,
                "text-gray-900": index < pathArray.length - 1,
              })}
              key={path}
              to={index === 0 ? "/" : pathname}
            >
              {t(path)}
            </Link>
            {index < pathArray.length - 1 && <span>&gt;</span>}
          </>
        );
      })}
    </section>
  );
}

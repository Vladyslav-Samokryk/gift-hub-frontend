import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbsProps {
  product?: string;
}

function getPathArray(pathname: string): string[] {
  const pathArray: string[] = pathname.split("/");
  pathArray[0] = "main_page";
  if (pathArray[1] === "catalog") {
    pathArray[1] = "bc.by_category";
    pathArray[2] = "categories." + pathArray[2];
  } else {
    pathArray[1] = "bc.by_search_name";
    pathArray.pop();
  }
  return pathArray;
}

export default function Breadcrumbs({
  product,
}: BreadcrumbsProps): JSX.Element {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const pathArray = getPathArray(pathname);

  if (product) {
    pathArray.push(product);
  }

  return (
    <section className="my-5 flex pl-5 pt-3 lg:p-0">
      {pathArray.map((path, index) => {
        return (
          <div key={path}>
            <Link
              className={classNames("secondary mx-1 font-light", {
                "font-semibold text-blue-700": index === pathArray.length - 1,
                "text-gray-900": index < pathArray.length - 1,
              })}
              to={index === 0 ? "/" : pathname}
            >
              {t(path)}
            </Link>
            {index < pathArray.length - 1 && <span>&gt;</span>}
          </div>
        );
      })}
    </section>
  );
}

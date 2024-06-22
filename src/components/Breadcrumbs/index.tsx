/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbsProps {
  product?: string;
  category?: string;
  categoryUrl?: string;
}

function getPathArray(
  pathname: string,
  product?: string,
  category?: string,
  categoryUrl?: string,
): Array<{ name: string; url: string }> {
  const breadcrumbs = [{ name: "main_page", url: "/" }];
  const pathArray: string[] = pathname.split("/");
  if (pathArray[1] === "catalog") {
    breadcrumbs.push({ name: "bc.by_category", url: pathname });
    breadcrumbs.push({ name: "categories." + pathArray[2], url: pathname });
  } else if (pathArray[1] === "product") {
    breadcrumbs.push({ name: "bc.by_category", url: pathname });
    if (category && categoryUrl) {
      breadcrumbs.push({ name: category, url: "/catalog/" + categoryUrl });
    }
    if (product) {
      breadcrumbs.push({ name: product, url: pathname });
    }
  } else {
    breadcrumbs.push({ name: "bc.by_search_name", url: pathname });
  }
  return breadcrumbs;
}

export default function Breadcrumbs({
  product,
  category,
  categoryUrl,
}: BreadcrumbsProps): JSX.Element {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const breadcrumbs = getPathArray(pathname, product, category, categoryUrl);

  return (
    <section className="my-5 flex pl-5 pt-3 lg:p-0">
      {breadcrumbs.map((path, index) => {
        return (
          <div key={index}>
            <Link
              className={classNames("secondary mx-1 font-light", {
                "font-semibold text-blue-700": index === breadcrumbs.length - 1,
                "text-gray-900": index < breadcrumbs.length - 1,
              })}
              to={path.url}
            >
              {(product && path.name === product) ||
              (category && path.name === category)
                ? path.name
                : t(path.name)}
            </Link>
            {index < breadcrumbs.length - 1 && <span>&gt;</span>}
          </div>
        );
      })}
    </section>
  );
}

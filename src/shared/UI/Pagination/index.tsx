import { usePaginationParamsContext } from "@src/app/context/catalogContext";
import classNames from "classnames";

const Pagination = (): JSX.Element => {
  const { count, productNum, setPage, page } = usePaginationParamsContext();
  const pages = Math.ceil(count / productNum);
  return (
    <div className="flex gap-3">
      {Array.from({ length: pages }, (_el, p) => (
        <button
          key={p}
          className={classNames({ "text-blue-700": p + 1 === page })}
          onClick={() => setPage(p + 1)}
        >
          {p + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

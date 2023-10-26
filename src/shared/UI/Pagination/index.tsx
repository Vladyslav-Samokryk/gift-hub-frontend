import classNames from "classnames";

interface PaginationProps {
  totalPages: number;
  setPage: (_val: number) => void;
  onClick: () => void;
  page: number;
}

const Pagination = ({
  totalPages,
  setPage,
  onClick,
  page,
}: PaginationProps): JSX.Element => {
  return (
    <div className="flex gap-3">
      {Array.from({ length: totalPages }, (_el, p) => (
        <button
          key={p}
          className={classNames({ "text-blue-700": p + 1 === page })}
          onClick={() => {
            setPage(p + 1);
            onClick();
          }}
        >
          {p + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

import { CategoryArrow } from "@src/shared";
import classNames from "classnames";

interface CategoryButtonProp {
  icon: string;
  title: string;
  onClick?: () => void;
  active: boolean;
}

export default function CategoryButton({
  icon,
  title,
  onClick,
  active,
}: CategoryButtonProp): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "additional lg:primary flex h-12 w-40 items-center justify-between pl-2 lg:w-60",
        {
          "bg-purple-100 font-semibold text-blue-700 ": active,
        },
      )}
    >
      <div className="flex">
        <img src={icon} alt={title} />
        <p className="ml-2 lg:ml-5">{title}</p>
      </div>
      <CategoryArrow />
    </button>
  );
}

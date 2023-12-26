import { CategoryArrow } from "shared/assets/svg/Arrows";
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
        "additional lg:primary flex h-12 w-full items-center justify-between md:w-56 md:pl-2",
        {
          "font-semibold text-blue-700 lg:bg-purple-100 ": active,
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

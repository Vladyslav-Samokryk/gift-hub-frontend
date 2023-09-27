import { CategoryArrow } from "@src/shared";
import classNames from "classnames";

interface CategoryButtonProp {
  icon: JSX.Element;
  title: string;
  onClick?: () => void;
  active: boolean;
}

export default function CategoryButton ({ icon, title, onClick, active }: CategoryButtonProp): JSX.Element {
  return (
    <button onClick={onClick} className={classNames("flex additional lg:primary w-40 lg:w-60 pl-2 items-center justify-between h-12", {
      "bg-purple-100 text-blue-700 font-semibold ": active,
    })}>
      <div className="flex">
        {icon}
        <p className="ml-2 lg:ml-5">{title}</p>
      </div>
      <CategoryArrow />
    </button>
  );
}

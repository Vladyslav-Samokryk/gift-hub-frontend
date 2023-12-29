import { DropDown } from "shared/assets/svg/Drops";
import classNames from "classnames";
import { useState } from "react";

interface ToggleBoxProps {
  header: string;
  description: string;
}

function ToggleBox({ header, description }: ToggleBoxProps): JSX.Element {
  const [isDescActive, setIsDescActive] = useState(false);
  return (
    <div className="mb-2">
      <div
        className={classNames(
          "bg-blue-300 p-2 rounded-md flex justify-between gap-2 ",
        )}
        onClick={() => setIsDescActive((prev) => !prev)}
      >
        <p className="secondary-bold">{header}</p>
        <div>
          <DropDown />
        </div>
      </div>
      <div
        className={classNames("p-2 rounded-md border border-blue-300", {
          hidden: !isDescActive,
          block: isDescActive,
        })}
      >
        <p className="secondary">{description}</p>
      </div>
    </div>
  );
}

export default ToggleBox;

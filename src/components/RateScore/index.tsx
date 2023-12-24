import classNames from "classnames";
import { Fragment } from "react";
import "./style.scss";

interface RangeScoreProps {
  data: Record<string, number>;
  max: number;
  labels: string[] | JSX.Element[];
  isValueHidden?: boolean;
  isStatic?: boolean;
}

const RangeScore = ({
  data,
  labels,
  max,
  isValueHidden = false,
  isStatic = false,
}: RangeScoreProps): JSX.Element => {
  return (
    <div
      className={classNames(
        "grid w-full gap-x-3 py-3 lg:items-center lg:py-5",
        {
          "grid-cols-[auto,40px] lg:grid-cols-[min-content,75%,min-content]":
            !isValueHidden && !isStatic,
          "grid-cols-[min-content,auto,40px]": isStatic,
          "lg:grid-cols-2": isValueHidden,
        },
      )}
    >
      {Object.keys(data).map((e, index) => {
        return (
          <Fragment key={index}>
            <label className="whitespace-nowrap col-start-1 w-max">
              {labels[index]}
            </label>
            <meter
              className={classNames("mt-1 w-full", {
                "col-start-2": isStatic,
                "col-start-1 lg:col-start-2": !isStatic,
              })}
              value={data[e]}
              max={max}
            />
            {!isValueHidden && <p>{data[e]}</p>}
          </Fragment>
        );
      })}
    </div>
  );
};

export default RangeScore;

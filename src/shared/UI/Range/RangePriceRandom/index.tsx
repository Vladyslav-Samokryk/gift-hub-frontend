import { CURRENCY } from "@config";
import { DIFFER, MAX_PRICE, SCREEN, useScreenWidth } from "@src/shared";
import classNames from "classnames";
import { type Dispatch, type SetStateAction } from "react";
import clsx from "clsx";

import ReactSlider from "react-slider";

interface Range {
  from: number;
  to: number;
}

interface RangeProp extends Range {
  permission: boolean;
  setRange: Dispatch<SetStateAction<Range>>;
  className?: string;
  elementRef?: React.RefObject<HTMLDivElement>;
}

interface RangeInputProps {
  value: number;
  elementRef?: React.RefObject<HTMLDivElement>;
}

function getDiffer(width: number, value: number): number {
  const THUMB = 24;
  const px = width / MAX_PRICE;
  return value * px - THUMB;
}

function adaptWidth(width: number): number {
  if (width < SCREEN.SM) {
    return width * 0.9;
  }
  return width < SCREEN.MD ? width * 0.36 : width * 0.45;
}

function RangeInput({ value, elementRef }: RangeInputProps): JSX.Element {
  const windowWidth = elementRef
    ? useScreenWidth(elementRef)
    : useScreenWidth();
  const width = adaptWidth(windowWidth);
  return (
    <div
      className="secondary absolute top-8 flex h-7 w-20 items-center justify-center rounded-full bg-white"
      style={{
        filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.2))",
        left: `${getDiffer(width, value)}px`,
      }}
    >
      <p>
        {CURRENCY}
        {value}
      </p>
    </div>
  );
}

export default function RangePriceRandom({
  permission,
  from,
  to,
  className = "",
  setRange,
  elementRef,
}: RangeProp): JSX.Element {
  return (
    <div className={clsx("relative mb-20 mt-10 w-[70%] md:w-[50%]", className)}>
      <ReactSlider
        className="h-2"
        thumbClassName="rounded-full bg-blue-700 border-8 top-1 -translate-y-1/2 border-white w-7 h-7 !z-0"
        defaultValue={[200, 700]}
        value={[from, to]}
        max={MAX_PRICE}
        pearling
        renderTrack={(props, state) => (
          <div
            {...props}
            className={classNames("h-2 rounded-full bg-blue-300", {
              "bg-primary-linear": state.index === 1,
            })}
          />
        )}
        renderThumb={(props, state) => (
          <div key={state.index} className="relative">
            {" "}
            <div {...props} />
            <RangeInput value={state.valueNow} elementRef={elementRef} />
          </div>
        )}
        minDistance={DIFFER}
        disabled={permission}
        onChange={(value) => setRange({ from: value[0], to: value[1] })}
      />
    </div>
  );
}

import { CURRENCY } from "app/api/config";
import { DIFFER, MAX_PRICE } from "shared/constants/price";
import { type Dispatch, type SetStateAction } from "react";
import * as classNames from "classnames";
import ReactSlider from "react-slider";

interface Range {
  from: number;
  to: number;
}

interface RangeProp extends Range {
  permission: boolean;
  setRange: Dispatch<SetStateAction<Range>>;
  className?: string;
}

interface RangeInputProps {
  value: number;
  left: string;
}

function adaptWidth(left: string): number {
  const inputSize = 25;
  return parseInt(left, 10) - inputSize;
}

function RangeInput({ value, left }: RangeInputProps): JSX.Element {
  const leftRange = adaptWidth(left);
  return (
    <div
      className="secondary absolute top-8 flex h-7 w-20 items-center justify-center rounded-full bg-white"
      style={{
        filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.2))",
        left: `${leftRange}px`,
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
  setRange,
  className = "",
}: RangeProp): JSX.Element {
  return (
    <div
      className={classNames(
        "relative mb-20 mt-10 w-[70%] md:w-[50%]",
        className,
      )}
    >
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
        renderThumb={(props: { style?: React.CSSProperties }, state) => (
          <div key={state.index} className="relative">
            <div {...props} />
            {props.style && (
              <RangeInput
                value={state.valueNow}
                left={props.style.left as string}
              />
            )}
          </div>
        )}
        minDistance={DIFFER}
        disabled={permission}
        onChange={(value) => setRange({ from: value[0], to: value[1] })}
      />
    </div>
  );
}

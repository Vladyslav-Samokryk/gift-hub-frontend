import { CURRENCY } from "@config";
import { useScreenWidth } from "@src/shared";
import { type Dispatch, type SetStateAction } from "react";

import ReactSlider from "react-slider";

interface Range {
  from: number;
  to: number;
}

interface RangeProp extends Range {
  permission: boolean;
  setRange: Dispatch<SetStateAction<Range>>;
}

interface RangeInputProps {
  value: number;
}

const differ = 200;
const MAX_STEP = 2000;

function getDiffer (width: number, value: number): number {
  const THUMB = 24;
  const px = width / MAX_STEP;
  return (value * px - THUMB);
}

function adaptWidth (width: number): number {
  return width < 768 ? width * 0.36 : width * 0.45;
}

function RangeInput ({ value }: RangeInputProps): JSX.Element {
  const windowWidth = useScreenWidth();
  const width = adaptWidth(windowWidth);
  return (
    <div className="secondary absolute top-8 flex h-7 w-20 items-center justify-center rounded-full bg-white"
      style={{
        filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.2))",
        left: `${getDiffer(width, value)}px`,
      }}>
      <p>{CURRENCY}{value}</p>
    </div>);
}

export default function RangePrice ({ permission, from, to, setRange }: RangeProp): JSX.Element {
  return (
    <div className="relative mb-20 mt-10 w-[70%] md:w-[50%]">
      <ReactSlider
        className="h-2"
        thumbClassName="rounded-full bg-blue-700 border-8 top-1 -translate-y-1/2 border-white w-7 h-7"
        defaultValue={[200, 700]}
        value={[from, to]}
        max={MAX_STEP}
        pearling
        renderTrack={(props, state) => <div {...props} className={state.index === 1 ? "h-2 bg-gradient-primary-linear" : "h-2 bg-blue-300"}/>}
        renderThumb={(props, state) => <div key={state.index} className="relative"> <div {...props}/> <RangeInput value={state.valueNow}/></div>}
        minDistance={differ}
        disabled={permission}
        onChange={(value) => setRange({ from: value[0], to: value[1] })}
      />
    </div>
  );
}

import { CURRENCY } from "@config";
import { useAppDispatch, useAppSelector } from "@src/app/store";
import { setFrom, setTo } from "@src/app/store/slices/randomRange";
import { useScreenWidth } from "@src/shared";
import { useEffect, useRef } from "react";

type RangeType = "from" | "to";

function differ (width: number, min: number, max: number): number[] {
  const MAX_STEP = 2000;
  const THUMB = 12;
  const px = width / MAX_STEP;
  const min_step = (min + THUMB) * px;
  const max_step = (max - THUMB) * px;
  return [max_step - min_step, min_step, max_step];
}

function adaptWidth (width: number): number {
  return width < 1024 ? width * 0.7 : width / 2;
}

export default function RangePrice (): JSX.Element {
  const dispatch = useAppDispatch();
  const randomRange = useAppSelector((state) => state.randomRange);
  const { from, to, permition } = randomRange;
  const minDiffer = 200;
  const windowWidth = useScreenWidth();

  function getRange (rangeType: RangeType, range: number): number {
    return rangeType === "from"
      ? (range >= to - minDiffer ? to - minDiffer : range)
      : (range <= from + minDiffer ? from + minDiffer : range);
  }

  return (
    <div className="relative m-auto my-3 h-8 w-[70vw] lg:w-[50vw]">
      <div className="absolute top-2 h-2 w-full rounded-sm bg-blue-300"/>

      <div className='absolute top-2 h-2 bg-gradient-primary-linear' style={{ left: `${differ(adaptWidth(windowWidth), from, to)[1]}px`, width: `${differ(adaptWidth(windowWidth), from, to)[0]}px` }}/>

      <input className="absolute w-full" type='range' min='0' max="2000" step="1" value={from} onChange={(e) => permition ? dispatch(setFrom({ from: getRange("from", +e.target.value) })) : from}/>
      <input className="absolute w-full" type='range' min="0" max='2000' step="1" value={to} onChange={(e) => permition ? dispatch(setTo({ to: getRange("to", +e.target.value) })) : to}/>

      <div className="secondary absolute top-10 flex h-7 w-20 items-center justify-center rounded-full bg-white" style={{ left: `${differ(adaptWidth(windowWidth), from, to)[1] - 50}px`, filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.2))" }}>
        <p>{CURRENCY}</p>
        <input className="w-12 text-center" type="number" min='0' max="2000" value={from} step='1' onChange={(e) => permition ? dispatch(setFrom({ from: getRange("from", +e.target.value) })) : from}/>
      </div>

      <div className="secondary absolute top-10 flex h-7 w-20 items-center justify-center rounded-full bg-white text-center" style={{ left: `${differ(adaptWidth(windowWidth), from, to)[2] - 20}px`, filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.2))" }} >
        <p>{CURRENCY}</p>
        <input className="w-12 text-center" value={to} min='0' max="2000" type="number" step='1' onChange={(e) => permition ? dispatch(setTo({ to: getRange("to", +e.target.value) })) : to}/>
      </div>
    </div>
  );
}

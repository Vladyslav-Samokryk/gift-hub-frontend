import { CURRENCY } from "@config";
import { useAppDispatch, useAppSelector } from "@src/app/store";
import { setFrom, setTo } from "@src/app/store/slices/randomRange";

type RangeType = "from" | "to";

function differ (width: number, min: number, max: number): number[] {
  const MAX_STEP = 2000;
  const STEP = 1;
  const px = width / (MAX_STEP / STEP);
  const min_step = min / STEP * px;
  const max_step = max / STEP * px;
  return [max_step - min_step, min_step, max_step];
}

export default function RangePrice (): JSX.Element {
  const dispatch = useAppDispatch();
  const randomRange = useAppSelector((state) => state.randomRange);
  const { from, to, permition } = randomRange;
  const minDiffer = 200;

  function getRange (rangeType: RangeType, range: number): number {
    return rangeType === "from"
      ? (range >= to - minDiffer ? to - minDiffer : range)
      : (range <= from + minDiffer ? from + minDiffer : range);
  }

  return (
    <div className="relative my-3 h-8 w-[600px]">
      <div className="absolute top-2 h-2 w-[600px] rounded-sm bg-blue-300"/>

      <div className='absolute top-2 h-2 bg-gradient-primary-linear' style={{ left: `${differ(600, from, to)[1] + 1}px`, width: `${differ(600, from, to)[0] - 2}px` }}/>

      <input className="absolute w-[600px]" type='range' min='0' max="2000" step="1" value={from} onChange={(e) => permition ? dispatch(setFrom({ from: getRange("from", +e.target.value) })) : from}/>
      <input className="absolute w-[600px]" type='range' min="0" max='2000' step="1" value={to} onChange={(e) => permition ? dispatch(setTo({ to: getRange("to", +e.target.value) })) : to}/>

      <div className="secondary absolute top-10 flex h-7 w-20 items-center justify-center rounded-full bg-white" style={{ left: `${differ(600, from, to)[1] - 33}px`, filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.2))" }}>
        <p>{CURRENCY}</p>
        <input className="w-12 text-center" type="number" min='0' max="2000" value={from} step='1' onChange={(e) => permition ? dispatch(setFrom({ from: getRange("from", +e.target.value) })) : from}/>
      </div>

      <div className="secondary absolute top-10 flex h-7 w-20 items-center justify-center rounded-full bg-white text-center" style={{ left: `${differ(600, from, to)[2] - 20}px`, filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.2))" }} >
        <p>{CURRENCY}</p>
        <input className="w-12 text-center" value={to} min='0' max="2000" type="number" step='1' onChange={(e) => permition ? dispatch(setTo({ to: getRange("to", +e.target.value) })) : to}/>
      </div>
    </div>
  );
}

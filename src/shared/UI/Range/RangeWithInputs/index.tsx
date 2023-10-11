import ReactSlider from "react-slider";

export default function RangeWithInputs(): JSX.Element {
  return (
    <div>
      <div className="flex items-center justify-between">
        <input type="number" className="input h-6 w-14" />
        <span>&#9473;</span>
        <input type="number" className="input h-6 w-14" />
        <button className="additional h-6 w-11 rounded-md border-2 border-gray-600 bg-purple-100 text-blue-700">
          OK
        </button>
      </div>
      <ReactSlider
        className="mt-8 h-6"
        thumbClassName="rounded-full h-5 w-5 bg-purple-100 border-2 border-gray-600 -translate-y-1/3"
        defaultValue={[0, 100]}
        renderTrack={(props, state) => (
          <div
            {...props}
            className={
              "h-1 rounded-full" +
              (state.index === 1 ? " bg-blue-700" : " bg-gray-600")
            }
          />
        )}
        pearling
        minDistance={10}
      />
    </div>
  );
}

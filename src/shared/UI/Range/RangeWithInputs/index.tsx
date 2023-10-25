import { MAX_PRICE, MIN_PRICE } from "@shared";
import { useFilterContext } from "@context/catalogContext";
import React, { useState } from "react";
import ReactSlider from "react-slider";

const RangeWithInputs = (): JSX.Element => {
  const [minValue, setMinValue] = useState(MIN_PRICE);
  const [maxValue, setMaxValue] = useState(MAX_PRICE);
  const [minRange, setMinRange] = useState(MIN_PRICE);
  const [maxRange, setMaxRange] = useState(MAX_PRICE);
  const { filterParams, setFilterParams } = useFilterContext();

  const handleMinValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setMinValue(+event.target.value);
  };

  const handleMaxValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setMaxValue(+event.target.value);
  };

  const handleClick = (): void => {
    if (
      minValue >= MIN_PRICE &&
      minValue <= MAX_PRICE &&
      maxValue > minValue &&
      maxValue <= MAX_PRICE
    ) {
      setMinRange(minValue);
      setMaxRange(maxValue);
      setFilterParams({
        ...filterParams,
        priceFrom: minValue,
        priceTo: maxValue,
      });
    }
  };

  const handleMinRangeChange = (event: number): void => {
    setMinValue(event);
    setMinRange(event);
  };

  const handleMaxRangeChange = (event: number): void => {
    setMaxValue(event);
    setMaxRange(event);
  };

  return (
    <div>
      <div className="secondary flex items-center justify-between">
        <input
          type="number"
          className="input h-6 w-16"
          min={MIN_PRICE}
          max={MAX_PRICE}
          value={minValue}
          onChange={handleMinValueChange}
        />
        <span>&#9473;</span>
        <input
          type="number"
          className="input h-6 w-16"
          min={MIN_PRICE}
          max={MAX_PRICE}
          value={maxValue}
          onChange={handleMaxValueChange}
        />
        <button
          className="additional h-6 w-11 rounded-md border-2 border-gray-600 bg-purple-100 text-blue-700"
          onClick={handleClick}
        >
          OK
        </button>
      </div>
      <ReactSlider
        className="mt-8 h-6"
        thumbClassName="rounded-full h-5 w-5 bg-purple-100 border-2 border-gray-600 -translate-y-1/3"
        defaultValue={[MIN_PRICE, MAX_PRICE]}
        value={[minRange, maxRange]}
        max={MAX_PRICE}
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
        onChange={(e) => {
          handleMinRangeChange(e[0]);
          handleMaxRangeChange(e[1]);
        }}
      />
    </div>
  );
};

export default RangeWithInputs;

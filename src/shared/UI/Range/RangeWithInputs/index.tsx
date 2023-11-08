import {
  MAX_PRICE,
  MIN_PRICE,
  getSearchParams,
  removeSearchParam,
  setSearchParam,
} from "@shared";
import { usePaginationParamsContext } from "@src/app/context/catalogContext";
import React, { useEffect, useState } from "react";
import ReactSlider from "react-slider";

interface Price {
  priceFrom: string;
  priceTo: string;
}

const RangeWithInputs = (): JSX.Element => {
  const [price, setPrice] = useState<Price>({
    priceFrom: "0",
    priceTo: "2000",
  });
  const searchParams = getSearchParams();
  const { setTrigger } = usePaginationParamsContext();

  const [minValue, setMinValue] = useState("0");
  const [maxValue, setMaxValue] = useState("2000");
  const [minRange, setMinRange] = useState("0");
  const [maxRange, setMaxRange] = useState("2000");

  useEffect(() => {
    setPrice({
      priceFrom: Array.isArray(searchParams.priceFrom)
        ? searchParams.priceFrom[0]
        : searchParams.priceFrom ?? "0",
      priceTo: Array.isArray(searchParams.priceTo)
        ? searchParams.priceFrom[0]
        : searchParams.priceTo ?? "2000",
    });
  }, []);

  useEffect(() => {
    setMaxValue(price.priceTo);
    setMinValue(price.priceFrom);

    setMaxRange(price.priceTo);
    setMinRange(price.priceFrom);
  }, [price]);

  const handleMinValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setMinValue(event.target.value);
  };

  const handleMaxValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setMaxValue(event.target.value);
  };

  const handleClick = (): void => {
    if (
      +minValue >= MIN_PRICE &&
      +minValue <= MAX_PRICE &&
      +maxValue > +minValue &&
      +maxValue <= MAX_PRICE
    ) {
      setPrice({
        priceFrom: minValue,
        priceTo: maxValue,
      });
      removeSearchParam("priceFrom");
      removeSearchParam("priceTo");
      setSearchParam("priceFrom", minValue);
      setSearchParam("priceTo", maxValue);
      setTrigger((prevTrigger) => prevTrigger + 1);

      setMinRange(minValue);
      setMaxRange(maxValue);
    }
  };

  const handleMinRangeChange = (event: number): void => {
    setMinValue(event.toString());
    setMinRange(event.toString());
  };

  const handleMaxRangeChange = (event: number): void => {
    setMaxValue(event.toString());
    setMaxRange(event.toString());
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
        defaultValue={[+price.priceFrom, +price.priceTo]}
        value={[+minRange, +maxRange]}
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

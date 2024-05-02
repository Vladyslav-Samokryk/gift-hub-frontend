import { setPage } from "app/store/slices/catalog";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactSlider from "react-slider";
import { MIN_PRICE, MAX_PRICE } from "shared/constants/price";
import { SCREEN } from "shared/constants/screens";
import { setSearchParam } from "shared/helpers/url";
import { useScreenWidth } from "shared/hooks/useScreenWidth";

interface Price {
  priceFrom: string;
  priceTo: string;
}

interface RangeWithInputsProps {
  modalClose?: () => void;
}

const RangeWithInputs = ({ modalClose }: RangeWithInputsProps): JSX.Element => {
  const searchParams = new URLSearchParams(window.location.search);
  const dispatch = useDispatch();

  const [price, setPrice] = useState<Price>({
    priceFrom: searchParams.get("priceFrom") ?? "0",
    priceTo: searchParams.get("priceTo") ?? "2000",
  });
  const navigate = useNavigate();

  const [minValue, setMinValue] = useState("0");
  const [maxValue, setMaxValue] = useState("2000");
  const [minRange, setMinRange] = useState("0");
  const [maxRange, setMaxRange] = useState("2000");
  const windowWidth = useScreenWidth();
  const [error, setError] = useState({ min: false, max: false });

  useEffect(() => {
    setMaxValue(price.priceTo);
    setMinValue(price.priceFrom);

    setMaxRange(price.priceTo);
    setMinRange(price.priceFrom);
  }, [price]);

  const validateInput = (value: string, type: "min" | "max"): void => {
    if (
      +value < MIN_PRICE ||
      +value > MAX_PRICE ||
      (type === "min" ? +value > +maxValue : +value < +minValue)
    ) {
      setError((prev) => ({ ...prev, [type]: true }));
    } else {
      setError((prev) => ({ ...prev, [type]: false }));
    }
  };

  const handleMinValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setMinValue(event.target.value);
    validateInput(event.target.value, "min");
  };

  const handleMaxValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setMaxValue(event.target.value);
    validateInput(event.target.value, "max");
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
      navigate(setSearchParam("priceFrom", minValue, false));
      navigate(setSearchParam("priceTo", maxValue, false));

      dispatch(setPage(1));

      setMinRange(minValue);
      setMaxRange(maxValue);

      if (modalClose && windowWidth <= SCREEN.MD) {
        modalClose();
      }
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
          className={classNames("input h-6 w-16", {
            "border-red-500": error.min,
          })}
          min={MIN_PRICE}
          max={MAX_PRICE}
          value={minValue}
          onChange={handleMinValueChange}
        />
        <span>&#9473;</span>
        <input
          type="number"
          className={classNames("input h-6 w-16", {
            "border-red-500": error.min,
          })}
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

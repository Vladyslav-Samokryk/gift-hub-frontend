import React, { useRef } from "react";
import "./index.scss";

interface StarRateProps {
  rate: number;
  starSize?: number;
}

interface MeterCSSProperties extends React.CSSProperties {
  "--max": number;
  "--star-size": string;
  "--stars-gap": string;
}

export default function StarRate({
  rate,
  starSize = 25,
}: StarRateProps): JSX.Element {
  const meterRef = useRef<HTMLMeterElement | null>(null);
  const maxStars = 5;
  const minStars = 0;
  const starsGap = 6;

  const style: MeterCSSProperties = {
    "--max": maxStars,
    "--star-size": `${starSize}px`,
    "--stars-gap": `${starsGap}px`,
  };

  return (
    <meter
      ref={meterRef}
      /*       onClick={(e) => {
        if (meterRef.current) {
          const x = e.pageX - meterRef.current.offsetLeft;
          const clickedValue =
            (x * meterRef.current.max) / meterRef.current.offsetWidth;
          setRangeValue(Math.floor(clickedValue) + 1);
        }
      }} */
      style={style}
      className="rating"
      min={minStars}
      max={maxStars}
      value={rate}
      itemProp="aggregateRating"
      itemScope
      itemType="http://schema.org/AggregateRating"
    />
  );
}

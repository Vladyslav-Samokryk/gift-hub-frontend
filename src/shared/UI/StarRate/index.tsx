import React, { useRef } from "react";
import "./index.scss";

interface StarRateProps {
  rate: number;
    onRateChange?: (rate: number) => void;
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
  onRateChange
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

   const handleClick = (e: React.MouseEvent<HTMLMeterElement>) => {
    if (meterRef.current) {
      const x = e.pageX - meterRef.current.getBoundingClientRect().left;
      const clickedValue =
        Math.ceil((x / meterRef.current.offsetWidth) * maxStars);
      if (onRateChange)
      onRateChange(clickedValue);
    }
  };

  return (
    <meter
      ref={meterRef}
      onClick={handleClick}
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

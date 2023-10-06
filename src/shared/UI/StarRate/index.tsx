import { useRef } from "react";
import "./index.scss";

interface StarRateProps {
  rate: number;
}

interface MeterCSSProperties extends React.CSSProperties {
  "--max": number;
  "--star-size": string;
  "--stars-gap": string;
}

export default function StarRate({ rate }: StarRateProps): JSX.Element {
  const meterRef = useRef<HTMLMeterElement | null>(null);
  const maxStars = 5;
  const minStars = 0;
  const starSize = 25;
  const starsGap = 6;

  const style: MeterCSSProperties = {
    "--max": maxStars,
    "--star-size": `${starSize}px`,
    "--stars-gap": `${starsGap}px`,
  };

  return (
    <meter
      ref={meterRef}
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

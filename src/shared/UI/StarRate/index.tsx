import { StarIcon } from "@shared";

interface StarRateProps {
  rate: number;
}

export default function StarRate ({ rate }: StarRateProps): JSX.Element {
  return (
    <div className="flex w-5/12 justify-between">
      {Array.from({ length: 5 }).map((_, i: number) => {
        return <StarIcon key={i} rated={i + 1 <= rate}/>;
      })}
    </div>
  );
}

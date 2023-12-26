import Star from "../assets/svg/Star";

export function getRateWithStars(data: string[]): JSX.Element[] {
  return data.map((el, index) => (
    <div className="flex items-center" key={index}>
      <p>{el.slice(-1)}</p>
      <Star />
    </div>
  ));
}

export default function RandomStep({
  index,
  step,
}: {
  index: number;
  step: string;
}): JSX.Element {
  return (
    <div className="flex items-center">
      <span className="mr-2 text-[40px] text-purple-900 lg:text-[70px]">
        {index}
      </span>
      <p className="secondary lg:h6 w-full md:w-[23vw]">{step}</p>
    </div>
  );
}

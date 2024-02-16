export default function RandomStep({
  index,
  step,
}: {
  index: number;
  step: string;
}): JSX.Element {
  return (
    <div className="flex w-full items-center justify-start md:w-[80%] md:justify-normal">
      <span className="mr-2 text-[40px] text-purple-900 lg:text-[70px]">
        {index}
      </span>
      <p className="secondary lg:h6">{step}</p>
    </div>
  );
}

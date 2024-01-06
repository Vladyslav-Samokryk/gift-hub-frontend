import type { Children } from "shared/types/CommonTypes";

interface ListBlockProps {
  title: string;
  index: string;
  indexStyle: string;
  children?: Children;
  className?: string;
}

export default function ListBlock({
  title,
  index,
  indexStyle,
  children,
  className = "",
}: ListBlockProps): JSX.Element {
  return (
    <div className="rounded-md bg-white p-4">
      <div className="primary mb-3 flex items-center gap-3">
        <p
          className={
            indexStyle +
            " relative z-20 after:absolute after:left-[-10px] after:top-[-2px] after:z-[-1] after:h-[30px] after:w-[30px]"
          }
        >
          {index}
        </p>
        <p>{title}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
}

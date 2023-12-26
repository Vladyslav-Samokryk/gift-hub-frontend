import type { Children } from "shared/types/CommonTypes";

interface ListProps {
  title: string;
  children: Children;
}

export default function ListContainer({
  title = "",
  children,
}: ListProps): JSX.Element {
  return (
    <div className="flex flex-col gap-3 pt-3">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

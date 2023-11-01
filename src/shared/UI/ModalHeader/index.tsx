import type { Children } from "@src/shared";
import { Close } from "@src/shared";

interface HeaderProps {
  title: string;
  children?: Children | null;
  onClose: () => void;
}

export default function ModalHeader({
  title,
  children,
  onClose,
}: HeaderProps): JSX.Element {
  return (
    <>
      <div className="flex items-center justify-between pb-1">
        <h2 className="text-3xl">{title}</h2>
        {children}
        <button onClick={onClose}>
          <Close />
        </button>
      </div>
      <hr className="h-[2px] bg-gray-900" />
    </>
  );
}

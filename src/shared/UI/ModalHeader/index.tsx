import type { Children } from "shared/types/CommonTypes";
import { Close } from "shared/assets/svg/CloseIcons";

interface HeaderProps {
  title: string;
  children?: Children | null;
  onClose: (() => void) | undefined;
  classname?: string;
}

export default function ModalHeader({
  title,
  children,
  onClose,
  classname,
}: HeaderProps): JSX.Element {
  return (
    <>
      <div className={`flex items-center justify-between pb-1 ${classname}`}>
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

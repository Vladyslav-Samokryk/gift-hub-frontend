import type { Children } from "@src/shared";
import { Close } from "@src/shared";

interface HeaderProps {
  title: string;
  children?: Children | null;
  setVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export default function ModalHeader ({ title, children, setVisible }: HeaderProps): JSX.Element {
  return (
    <>
      <div className='flex items-center justify-between pb-1'>
        <h2 className="text-3xl">{title}</h2>
        {children}
        <button onClick={() => setVisible(prev => !prev)}>
          <Close/>
        </button>
      </div>
      <hr className="h-[2px] bg-gray-900"/>
    </>

  );
}

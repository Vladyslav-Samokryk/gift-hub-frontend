import type { Children } from "@src/shared";
import classNames from "classnames";

interface ChildrenProps {
  visible: boolean;
  children: Children;
}

export default function ModalContainer ({ visible, children }: ChildrenProps): JSX.Element {
  return (
    <div className={classNames("fixed inset-0 z-50", {
      hidden: !visible,
      block: visible,
    },
    )} style={{ backdropFilter: "blur(2px) contrast(50%)" }}>
      <div className='fixed inset-x-0 top-60 m-auto h-max w-fit rounded-md border-2 border-gray-400 bg-white shadow-main'>
        {children}
      </div>
    </div>
  );
}

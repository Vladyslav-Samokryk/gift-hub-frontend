import type { Children } from "shared/types/CommonTypes";

interface ButtonWithIconProps {
  text: string;
  className?: string;
  onClick: () => void;
  children: Children;
}

const ButtonWithIcon = ({
  text,
  className = "mb-5 h-11 w-[122px] items-center justify-center gap-3 rounded-md border border-solid border-gray-900 align-middle text-lg font-medium md:w-44",
  onClick,
  children,
}: ButtonWithIconProps): JSX.Element => {
  return (
    <button className={className + " flex"} onClick={onClick}>
      {children}
      <span>{text}</span>
    </button>
  );
};

export default ButtonWithIcon;

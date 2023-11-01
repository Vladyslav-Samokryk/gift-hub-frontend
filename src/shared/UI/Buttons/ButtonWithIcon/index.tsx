import type { Children } from "@src/shared";

interface ButtonWithIconProps {
  text: string;
  className?: string;
  onClick: () => void;
  children: Children;
}

const ButtonWithIcon = ({
  text,
  className = "",
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

import clsx from "clsx";

interface SecretGiftTryButtonProps {
  type: "submit" | "reset" | "button";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function SecretGiftTryButton({
  type,
  children,
  onClick,
  className = "",
}: SecretGiftTryButtonProps): JSX.Element {
  return (
    <button
      type={type}
      className={clsx(
        "btn btn-effect bg-[#6F57FF] font-rubik text-[16px]  leading-6",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

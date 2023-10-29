interface SecretGiftTryButtonProps {
  type: "submit" | "reset" | "button";
  children: React.ReactNode;
  onClick: () => void;
}

export default function SecretGiftTryButton({
  type,
  children,
  onClick,
}: SecretGiftTryButtonProps): JSX.Element {
  return (
    <button
      type={type}
      className="btn btn-effect mt-10 bg-[#6F57FF] px-32 py-5 font-rubik text-[16px]  leading-6 md:px-9"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

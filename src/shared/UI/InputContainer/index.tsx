import { Close } from "shared/assets/svg/CloseIcons";
import type { Children } from "shared/types/CommonTypes";

interface InputProps {
  children: Children;
  label: string;
  inputValue: string;
  setInputValue: (arg: string) => void;
  className?: string;
}

export default function InputContainer({
  children,
  label,
  inputValue,
  setInputValue,
  className = "",
}: InputProps): JSX.Element {
  return (
    <div className={"input relative flex items-center bg-white " + className}>
      {children}
      {inputValue.length ? (
        <button
          onClick={() => setInputValue("")}
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          <Close />
        </button>
      ) : null}
      <label className="label">{label}</label>
    </div>
  );
}

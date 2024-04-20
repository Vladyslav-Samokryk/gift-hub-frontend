import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Close } from "shared/assets/svg/CloseIcons";
import type { Children } from "shared/types/CommonTypes";

interface InputProps {
  children: Children;
  label: string;
  inputValue: string;
  setInputValue: () => void;
  className?: string;
  isError?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}

export default function InputContainer({
  children,
  label,
  inputValue,
  setInputValue,
  className = "",
  isError = false,
  errorMessage = "",
  disabled = false,
}: InputProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="flex w-full flex-col">
      <div
        className={classNames(
          "input relative flex items-center bg-white h-12",
          {
            "hover:!border-gray-900": disabled,
            className: className.length,
            "border-accent-red": isError,
          },
        )}
      >
        {children}
        {inputValue.length && !disabled ? (
          <button
            type="button"
            onClick={() => setInputValue()}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            <Close />
          </button>
        ) : null}
        <label className="label">{label}</label>
      </div>
      {isError && !disabled && (
        <p className="additional text-accent-red">{t(errorMessage)}</p>
      )}
    </div>
  );
}

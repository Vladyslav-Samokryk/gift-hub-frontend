import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { PasswordHide, PasswordShow } from "shared/assets/svg/PasswordIcons";
import InputContainer from "shared/UI/InputContainer";

interface InputPasswordProps {
  label: string;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}

export default function InputPassword({
  label,
  password,
  setPassword,
}: InputPasswordProps): JSX.Element {
  const [inputType, setInputType] = useState<"password" | "text">("password");
  const clearValue = (): void => {
    setPassword("");
  };
  return (
    <div className="flex justify-between gap-5">
      <InputContainer
        label={label}
        inputValue={password}
        setInputValue={clearValue}
      >
        <input
          type={inputType}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" "
          className="h-full w-full focus:outline-none"
          required
        />
      </InputContainer>
      <button
        onClick={() =>
          setInputType((prev) => (prev === "password" ? "text" : "password"))
        }
      >
        {inputType === "password" ? <PasswordHide /> : <PasswordShow />}
      </button>
    </div>
  );
}

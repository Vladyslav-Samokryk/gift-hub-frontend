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

  return (
    <div className="flex w-[90%] justify-between">
      <InputContainer
        label={label}
        inputValue={password}
        setInputValue={setPassword}
        className="w-[90%]"
      >
        <input
          type={inputType}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" "
          className="h-full w-full pr-8 focus:outline-none"
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

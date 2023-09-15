import { useState } from "react";
import { InputContainer, PasswordHide, PasswordShow } from "@shared";

export default function InputPassword ({ label }: { label: string; }): JSX.Element {
  const [inputType, setInputType] = useState<"password" | "text">("password");

  return (
    <InputContainer label={label}>
      <input type={inputType} placeholder=" " className="input mr-3 w-[80%]" required/>
      <button onClick={() => setInputType(prev => prev === "password" ? "text" : "password")}>
        {inputType === "password" ? <PasswordHide/> : <PasswordShow/>}
      </button>
    </InputContainer>
  );
}

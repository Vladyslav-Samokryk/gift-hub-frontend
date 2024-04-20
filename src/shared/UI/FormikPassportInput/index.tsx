/* eslint-disable @typescript-eslint/no-misused-promises */
import { Field } from "formik";
import InputContainer from "../InputContainer";
import { useState } from "react";
import { PasswordHide, PasswordShow } from "shared/assets/svg/PasswordIcons";

interface FormikInputProps {
  value: string;
  setFieldValue: (field: string, value: string) => void;
  label: string;
  name: string;
  isError?: boolean;
  errorMessage?: string;
  isDisable?: boolean;
}

function FormikPasswordInput({
  value,
  setFieldValue,
  label,
  name,
  isError = false,
  errorMessage = "",
  isDisable = false,
}: FormikInputProps): JSX.Element {
  const [inputType, setInputType] = useState<"password" | "text">("password");

  return (
    <div className="flex justify-between gap-5">
      <InputContainer
        label={isDisable ? "" : label}
        inputValue={value}
        setInputValue={() => setFieldValue(name, "")}
        isError={isError}
        errorMessage={errorMessage}
        disabled={isDisable}
      >
        <Field
          className="h-full w-full pr-8 focus:outline-none"
          id={name}
          name={name}
          placeholder={isDisable && value.length === 0 ? label : ""}
          type={isDisable ? "password" : inputType}
          value={value}
          disabled={isDisable}
        />
      </InputContainer>
      <button
        type="button"
        onClick={() =>
          setInputType((prev) => (prev === "password" ? "text" : "password"))
        }
      >
        {!isDisable ? (
          inputType === "password" ? (
            <PasswordHide />
          ) : (
            <PasswordShow />
          )
        ) : null}
      </button>
    </div>
  );
}

export default FormikPasswordInput;

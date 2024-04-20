/* eslint-disable @typescript-eslint/no-misused-promises */
import { Field } from "formik";
import InputContainer from "../InputContainer";

interface FormikInputProps {
  value: string;
  setFieldValue: (field: string, value: string) => void;
  label: string;
  name: string;
  isError?: boolean;
  errorMessage?: string;
  type?: string;
  disabled?: boolean;
}

function FormikInput({
  value,
  setFieldValue,
  label,
  name,
  type = "text",
  isError = false,
  errorMessage = "",
  disabled = false,
}: FormikInputProps): JSX.Element {
  return (
    <InputContainer
      label={disabled ? "" : label}
      inputValue={value}
      setInputValue={() => setFieldValue(name, "")}
      isError={isError}
      errorMessage={errorMessage}
      disabled={disabled}
    >
      <Field
        className="h-full w-full pr-8 focus:outline-none"
        id={name}
        name={name}
        placeholder={disabled && value.length === 0 ? label : ""}
        type={type}
        value={value}
        disabled={disabled}
      />
    </InputContainer>
  );
}

export default FormikInput;

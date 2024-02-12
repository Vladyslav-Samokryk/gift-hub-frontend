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
}

function FormikInput({
  value,
  setFieldValue,
  label,
  name,
  type = "text",
  isError = false,
  errorMessage = "",
}: FormikInputProps): JSX.Element {
  return (
    <InputContainer
      label={label}
      inputValue={value}
      setInputValue={async () => setFieldValue(name, "")}
      isError={isError}
      errorMessage={errorMessage}
    >
      <Field
        className="h-full w-full pr-8 focus:outline-none"
        id={name}
        name={name}
        placeholder=""
        type={type}
        value={value}
      />
    </InputContainer>
  );
}

export default FormikInput;

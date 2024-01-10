/* eslint-disable @typescript-eslint/no-misused-promises */
import { Field } from "formik";
import InputContainer from "../InputContainer";

interface FormikInputProps {
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFieldValue: (field: string, value: any) => void;
  label: string;
  name: string;
  type?: string;
}

function FormikInput({
  value,
  setFieldValue,
  label,
  name,
  type = "text",
}: FormikInputProps): JSX.Element {
  return (
    <InputContainer
      label={label}
      inputValue={value}
      setInputValue={async () => setFieldValue(name, "")}
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

interface CheckboxProps {
  title: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  id: string;
}

export default function Checkbox({
  title,
  onChange,
  checked,
  id,
}: CheckboxProps): JSX.Element {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        className="mr-3 h-5 w-5 accent-green-600"
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id} className="additional first-letter:capitalize">
        {title}
      </label>
    </div>
  );
}

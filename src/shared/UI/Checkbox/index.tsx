interface CheckboxProps {
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({
  title,
  onChange,
}: CheckboxProps): JSX.Element {
  return (
    <div className="flex items-center">
      <input
        id="checkbox"
        type="checkbox"
        className="mr-3 h-5 w-5 accent-green-600"
        onChange={onChange}
      />
      <label htmlFor="checkbox" className="additional first-letter:capitalize">
        {title}
      </label>
    </div>
  );
}

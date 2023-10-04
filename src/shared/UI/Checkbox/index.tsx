interface CheckboxProps {
  title: string;
}

export default function Checkbox ({ title }: CheckboxProps): JSX.Element {
  return (
    <div className="flex items-center">
      <input id="checkbox" type="checkbox" className="mr-3 h-5 w-5 accent-green-600"/>
      <label htmlFor="checkbox">{title}</label>
    </div>
  );
}

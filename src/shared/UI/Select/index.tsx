interface SelectProps {
  title: string;
  options: number[];
  onSelect: (_value: number) => void;
  productNum: number;
}

const Select = ({
  title,
  options,
  onSelect,
  productNum,
}: SelectProps): JSX.Element => {
  return (
    <div className="flex w-64 items-center gap-3">
      <label htmlFor="select" className="primary-bold">
        {title}
      </label>
      <select
        id="select"
        className="border-2 border-black"
        onChange={(e) => onSelect(+e.target.value)}
      >
        {options.map((el) => (
          <option key={el} value={el} selected={el === productNum}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

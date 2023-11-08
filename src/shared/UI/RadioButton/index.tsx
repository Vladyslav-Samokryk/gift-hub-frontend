interface RadioProps {
  text: string;
  value: string;
  onClick: () => void;
  className: string;
  checked: boolean;
}

const RadioButton = ({
  text,
  value,
  onClick,
  className,
  checked,
}: RadioProps): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className={"flex w-full justify-between " + className}
    >
      <label htmlFor="radio">{text}</label>
      <input
        id="radio"
        name="radio"
        type="radio"
        value={value}
        checked={checked}
        onChange={(e) => e}
      />
    </div>
  );
};

export default RadioButton;

import React, { useState } from "react";
import Select from "react-select";
interface SelectSecretGiftProps {
  options: option[];
}
export interface option {
  value: string;
  label: string;
}

const customStyles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: state.isSelected ? "rgba(48, 63, 159, 1)" : "rgba(96, 125, 139, 1)",
    backgroundColor: state.isSelected
      ? "rgba(96, 125, 139, 0.15)"
      : "rgba(255, 255, 255, 1)",
  }),

  control: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "rgba(255, 255, 255, 1)",
    padding: "10px",
    boxShadow: "none",
    border: "border border-gray-300 rounded-md",
  }),
  singleValue: (defaultStyles, state) => ({
    ...defaultStyles,
    color: state.isSelected ? "rgba(48, 63, 159, 1)" : "rgba(96, 125, 139, 1)",
    borderLeft: state.isSelected ? "4px solid  #00BCD4" : "",
  }),
};
export default function SelectSecretGift({
  options,
}: SelectSecretGiftProps): JSX.Element {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <Select
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
      autoFocus={true}
      classNamePrefix="myselect"
      styles={customStyles}
    />
  );
}

import type { DropdownIndicatorProps } from "react-select";
import Select, { components } from "react-select";
import clsx from "clsx";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@src/shared/assets/svg/Arrows";
import type { Category } from "../SecretGiftContainer/SecretGiftForm";

interface SelectSecretGiftProps {
  options?: option[];
  category: Category | null;
  setCategory: (category: option) => void;
}
export interface option {
  value: string;
  label: string;
}

const controlStyles = {
  base: "border rounded-md text-black bg-[#A6B8E8] hover:cursor-pointer p-2",
  focus: "border-[#607D8B] ring-1 ring-primary-500",
  nonFocus: "border-gray-300 hover:border-gray-400",
};
const placeholderStyles = "text-black secondary leading-[22px] pl-1 py-0.5";
const selectInputStyles = "pl-1 py-0.5";
const valueContainerStyles = "p-1 gap-1";
const singleValueStyles = "leading-7";
const indicatorSeparatorStyles = "bg-transparent";
const dropdownIndicatorStyles = "p-1 rounded-md bg-[#A6B8E8]";
const menuStyles = "mt-2 border border-gray-200 bg-white rounded-lg";
const optionStyles = {
  base: "hover:cursor-pointer px-3 py-3 hover:bg-[#607D8B]/30 hover:text-black text-accent-deepGray",
  focus:
    "text-accent-ocean border-l-[4px] border-l-[#00BCD4] bg-[rgba(96, 125, 139, 0.15)]",
  selected: "text-blue-500 border-l-[4px] border-l-[#00BCD4] bg-[#607D8B]/30",
};
const noOptionsMessageStyles =
  "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";

export default function SelectSecretGift({
  options,
  category,
  setCategory,
}: SelectSecretGiftProps): JSX.Element {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const DropdownIndicator = (
    props: DropdownIndicatorProps<option>,
  ): JSX.Element => {
    return (
      <components.DropdownIndicator {...props}>
        {isSelectOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </components.DropdownIndicator>
    );
  };
  return (
    <Select
      components={{ DropdownIndicator }}
      defaultValue={category}
      onChange={(category: option) => setCategory(category)}
      options={options}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      unstyled
      onMenuOpen={() => setIsSelectOpen(true)}
      onMenuClose={() => setIsSelectOpen(false)}
      styles={{
        input: (base) => ({
          ...base,
          "input:focus": {
            boxShadow: "none",
          },
        }),
        multiValueLabel: (base) => ({
          ...base,
          whiteSpace: "normal",
          overflow: "visible",
        }),
        control: (base) => ({
          ...base,
          transition: "none",
        }),
      }}
      classNames={{
        control: ({ isFocused }) =>
          clsx(
            isFocused ? controlStyles.focus : controlStyles.nonFocus,
            controlStyles.base,
          ),
        placeholder: () => placeholderStyles,
        input: () => selectInputStyles,
        valueContainer: () => valueContainerStyles,
        singleValue: () => singleValueStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        menu: () => menuStyles,
        option: ({ isFocused, isSelected }) =>
          clsx(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            optionStyles.base,
          ),
        noOptionsMessage: () => noOptionsMessageStyles,
      }}
    />
  );
}

import type { DropdownIndicatorProps } from "react-select";
import Select, { components } from "react-select";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "shared/assets/svg/Arrows";
import { useTranslation } from "react-i18next";
import * as classNames from "classnames";

interface SelectSecretGiftProps {
  options?: Category[];
  category: Category | undefined;
  setCategory: Dispatch<SetStateAction<Category | undefined>>;
}
export interface Category {
  value: string;
  label: string;
}

const controlStyles = {
  base: "border rounded-md text-black bg-[#A6B8E8] hover:cursor-pointer p-2 w-[60vw] md:w-96",
  focus: "border-[#607D8B] ring-1 ring-primary-500",
  nonFocus: "border-gray-300 hover:border-gray-400",
};
const menuStyles = "mt-2 border border-gray-200 bg-white rounded-lg";
const optionStyles = {
  base: "hover:cursor-pointer px-3 py-3 hover:bg-[#607D8B]/30 hover:text-black text-accent-deepGray",
  focus:
    "text-accent-ocean border-l-4 border-l-blue-700 bg-[rgba(96, 125, 139, 0.15)]",
  selected: "text-blue-500 border-l-4 border-l-blue-700 bg-[#607D8B]/30",
};
const noOptionsMessageStyles =
  "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";

export default function SelectSecretGift({
  options,
  category,
  setCategory,
}: SelectSecretGiftProps): JSX.Element {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const { t } = useTranslation();
  const DropdownIndicator = (
    props: DropdownIndicatorProps<Category>,
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
      placeholder={t("secret_gift.ph_select")}
      onChange={(newValue) => setCategory(newValue as Category)}
      options={options}
      closeMenuOnSelect={true}
      unstyled
      isSearchable={false}
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
          classNames(
            isFocused ? controlStyles.focus : controlStyles.nonFocus,
            controlStyles.base,
          ),
        menu: () => menuStyles,
        option: ({ isFocused, isSelected }) =>
          classNames(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            optionStyles.base,
          ),
        noOptionsMessage: () => noOptionsMessageStyles,
      }}
    />
  );
}

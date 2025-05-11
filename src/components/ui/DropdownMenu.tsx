import React from "react";
import Select, { StylesConfig, GroupBase } from "react-select";

// Định nghĩa kiểu dữ liệu cho các option
export interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface DropdownMenuProps {
  options: DropdownOption[];
  defaultValue?: DropdownOption;
  onChange?: (selectedOption: any) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  options,
  defaultValue,
  onChange,
}) => {
  // Tạo hàm để định dạng option label với icon
  const formatOptionLabel = ({ label, icon }: DropdownOption) => (
    <div className="flex items-center">
      {icon && <span className="mr-2">{icon}</span>}
      <span>{label}</span>
    </div>
  );

  // Tùy chỉnh styles cho dropdown
  const customStyles: StylesConfig<
    DropdownOption,
    boolean,
    GroupBase<DropdownOption>
  > = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? "#090a0a" : "#e2e8f0",
      boxShadow: state.isFocused ? "0 0 0 1px #090a0a" : "none",
      "&:hover": {
        borderColor: "#090a0a",
      },
      borderRadius: "0.375rem",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "lightgrey"
        : state.isFocused
        ? "#e2e8f0"
        : "transparent",
      color: state.isSelected ? "black" : state.isFocused ? "black" : "grey",
      cursor: "pointer",
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: () => ({
      color: "black", // đổi màu arrow thành đen
      padding: "0 8px",
    }),
  };

  return (
    <Select
      options={options}
      defaultValue={defaultValue}
      onChange={onChange}
      className={`min-w-[300px] text-[15px]`}
      styles={customStyles}
      isSearchable={false}
      formatOptionLabel={formatOptionLabel}
    />
  );
};

export default DropdownMenu;

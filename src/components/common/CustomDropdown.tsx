// components/CustomDropdown.tsx
import React, { useState, useRef } from "react";
import useClickAwayListener from "@/hooks/useClickAwayListener";

const CustomDropdown: React.FC<{ options: string[] }> = ({ options }) => {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value.toLowerCase();
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(newInputValue)
    );

    setInputValue(newInputValue);
    setFilteredOptions(filtered);
    setShowDropdown(true);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setInputValue(option);
    setFilteredOptions([]);
    setShowDropdown(false);
  };

  useClickAwayListener(dropdownRef, () => {
    setShowDropdown(false);
  });

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <input
        className="border p-2 rounded-md w-full focus:outline-none focus:border-primary"
        type="text"
        placeholder="Select an option..."
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(true)}
        value={inputValue}
      />
      {showDropdown && filteredOptions.length > 0 && (
        <ul className="absolute bg-white border p-2 rounded-md mt-1 w-full shadow-md">
          {filteredOptions.map((option) => (
            <li
              key={option}
              className="cursor-pointer hover:bg-gray-100 p-1"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;

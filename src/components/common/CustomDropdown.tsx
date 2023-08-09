import React, { useState, useRef, ChangeEvent } from "react";
import useClickAwayListener from "@/hooks/useClickAwayListener";
import Image from "next/image";

interface CustomDropdownProps {
  options: string[];
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options }) => {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        className="overflow-hidden bg-input flex flex-row justify-between w-full h-12 items-center px-4 text-xs rounded-lg outline-none"
        type="text"
        placeholder="Eg. Globex Corporation"
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(true)}
        value={inputValue}
      />
      <Image
        src="https://file.rendit.io/n/Rh1D1OboeMiJu2952HEP.svg"
        className="w-4 ml-0 shrink-0 absolute bottom-4 right-4"
        alt="Dropdown icon"
        height={10}
        width={10}
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

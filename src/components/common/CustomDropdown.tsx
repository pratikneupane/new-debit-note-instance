import React, { useState, useRef } from "react";
import useClickAwayListener from "@/hooks/useClickAwayListener";

/**
 * CustomDropdown Component
 *
 * A reusable dropdown input component that filters and displays options as the user types.
 *
 * @component
 * @param {object} props - Component props
 * @param {string[]} props.options - List of options for the dropdown.
 * @returns {JSX.Element} CustomDropdown component.
 */
const CustomDropdown: React.FC<{ options: string[] }> = ({ options }) => {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /**
   * Handle input change event.
   * Updates the input value and filters options based on user input.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - Input change event.
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value.toLowerCase();
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(newInputValue)
    );

    setInputValue(newInputValue);
    setFilteredOptions(filtered);
    setShowDropdown(true);
  };

  /**
   * Handle option selection.
   * Sets the selected option and updates input value, then hides the dropdown.
   *
   * @param {string} option - Selected option.
   */
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setInputValue(option);
    setFilteredOptions([]);
    setShowDropdown(false);
  };

  // Close the dropdown when clicking away from it
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

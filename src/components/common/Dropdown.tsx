import { useState } from "react";
import Image from "next/image";

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const { options } = props;
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // New state

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    toggleDropdown(); // Close the dropdown after selecting an option
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative inline-block">
      <div
        className="flex flex-row justify-center w-full h-12 items-center cursor-pointer"
        onClick={toggleDropdown} // Toggle dropdown visibility
      >
        <div className="whitespace-nowrap text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-8 shrink-0">
          {selectedOption}
        </div>
        <Image
          src="https://file.rendit.io/n/Rh1D1OboeMiJu2952HEP.svg"
          className="w-4 ml-0 shrink-0"
          alt="Dropdown icon"
          height={5}
          width={5}
        />
      </div>
      {isDropdownVisible && (
        <ul className="absolute z-[10] left-0 mt-2 w-20 bg-white border border-gray-300 shadow-md rounded-md">
          {options.map((option, index) => (
            <li
              key={index}
              className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionChange(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

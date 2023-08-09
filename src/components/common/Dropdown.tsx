import { useState } from "react";
import Image from "next/image";

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const { options } = props;
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative inline-block z-[100]"> {/* Increase the z-index value */}
      <div
        className="flex flex-row justify-center w-full h-6 items-center cursor-pointer"
        onClick={toggleDropdown}
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
        <ul className="left-0 w-20 bg-white border border-gray-300 shadow-md rounded-md z-[110]"> 
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

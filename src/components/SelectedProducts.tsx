import React from "react";
import Dropdown from "./common/Dropdown";
import Image from "next/image";

interface SelectedProductProps {
  index: number;
  name: string;
  batch: string;
  amount: string;
  onRemove: (index: number) => void;
}

const SelectedProduct: React.FC<SelectedProductProps> = ({
  index,
  name,
  batch,
  amount,
  onRemove,
}) => {
  return (
    <div className="flex flex-row w-full h-20 items-center px-6">
      <div className="flex flex-col gap-1 w-1/5">
        <div className="whitespace-nowrap text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-full">
          {name}
        </div>
        <div className="border-dashed border-[#979797] overflow-hidden flex flex-col mr-5 h-8 shrink-0 items-start pl-2 py-2 border-t-0 border-b border-x-0 w-full">
          <input
            type="text"
            placeholder="Enter Description"
            className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-full focus:outline-none"
          />
        </div>
      </div>
      <div className="text-xs font-['DM_Sans'] text-center flex justify-center items-center leading-[16px] text-[#00171f] w-1/12 ml-12">
        {batch}
      </div>
      <div className="whitespace-nowrap text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-8 shrink-0 mx-2 ml-20">
        <Dropdown options={["Ktm 1", "Ktm 2"]} />
      </div>
      <div className="border-dashed border-[#979797] flex flex-row justify-center gap-y-6 w-[80px]  mx-3 ml-12 shrink-0 h-12 items-center border-t-0 border-b border-x-0">
        <input
          className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-10 shrink-0 outline-none focus:outline-none"
          type="number"
          placeholder="1"
        />
        <div className="flex flex-row w-4 shrink-0 items-center">
          <Dropdown options={["Btl", "Kg"]} />
        </div>
      </div>
      <div className="border-dashed border-[#979797] flex flex-col justify-center w-[80px] mr-6 shrink-0 h-12 items-center border-t-0 border-b border-x-0 mx-2">
        <input
          type="number"
          className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-full focus:outline-none"
        />
      </div>
      <div className="border-dashed border-[#979797] flex flex-col justify-center w-[80px] mr-6 shrink-0 h-12 items-center border-t-0 border-b border-x-0">
        <input
          type="number"
          className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-full focus:outline-none"
        />
      </div>
      <div className="whitespace-nowrap text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-[80px] shrink-0 ml-8">
        13% VAT
      </div>
      <div className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-[80px] shrink-0 ml-4">
        {amount}
      </div>
      <Image
        src="https://file.rendit.io/n/rcCI8cfjhUQi3Us9rLd4.svg"
        className="w-5 shrink-0 cursor-pointer"
        height={5}
        width={5}
        alt="Remove icon"
        onClick={() => onRemove(index)}
      />
    </div>
  );
};

export default SelectedProduct;

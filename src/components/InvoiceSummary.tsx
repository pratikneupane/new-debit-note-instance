import React from "react";
import Dropdown from "./common/Dropdown";

interface InvoiceSummaryProps {
  total: number;
  grandTotal: number;
}

const InvoiceSummary: React.FC<InvoiceSummaryProps> = ({
  total,
  grandTotal,
}) => {
  return (
    <div className="bg-white flex flex-row justify-center pt-4 gap-16 w-full items-center">
      <div className="self-start flex flex-col justify-between gap-2 w-1/2 items-start">
        <div className="text-xs font-medium leading-[16px] text-[#00171f]">
          Note
        </div>
        <div className="bg-[#f0f0f0] self-stretch flex flex-col h-16 items-start pl-4 py-4 rounded-lg overflow-hidden">
          <div className="whitespace-nowrap text-xs font-['DM_Sans'] leading-[16px] text-[#979797] w-16">
            Enter notes
          </div>
        </div>
        <div className="whitespace-nowrap text-xs font-['DM_Sans'] tracking-[0.07] leading-[13px] text-[#979797] w-32">
          *This will appear on print
        </div>
      </div>
      <div className="bg-white flex flex-col justify-between w-full h-56 p-2 gap-[12px] rounded-lg">
        <div className="flex flex-row justify-between items-center mr-2">
          <div className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-6 shrink-0">
            Total
          </div>
          <div className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-2 shrink-0 ">
            0
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="whitespace-nowrap text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] self-start w-24 shrink-0">
            Total Excise Duty
          </div>
          <div className="border-dashed border-[#979797] flex flex-col pr-2 w-20 shrink-0  items-end border-t-0 border-b border-x-0">
            <input
            placeholder="0"
              type="number"
              className="text-xs text-right font-['DM_Sans'] leading-[16px] text-[#00171f] w-full focus:outline-none mr-[0.05rem]"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <div className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-12 shrink-0">
              Discount
            </div>
            <div className="bg-gray">
              <Dropdown options={["Amt", "%"]} />
            </div>
          </div>
          <div className="border-dashed border-[#979797] flex flex-col pr-2 w-20 shrink-0  items-end border-t-0 border-b border-x-0">
            <input
            placeholder="0"
              type="number"
              className="text-xs text-right font-['DM_Sans'] leading-[16px] text-[#00171f] w-full focus:outline-none mr-[0.05rem]"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mr-4">
          <div className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-full shrink-0">
            Non-Taxable Amount
          </div>
          <div className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-2 shrink-0  ">
            0
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mr-4">
          <div className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-full shrink-0">
            Taxable Amount
          </div>
          <div className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-2 shrink-0  ">
            0
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mr-4">
          <div className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-full shrink-0">
            VAT
          </div>
          <div className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-2 shrink-0  ">
            0
          </div>
        </div>
        <div className="border-solid border-[#00171f] flex flex-row justify-between pr-2 h-8 shrink-0 items-center border-t border-b-0 border-x-0">
          <div className="whitespace-nowrap text-xs font-['DM_Sans'] font-medium leading-[16px] text-[#00171f] w-16 shrink-0">
            Grand Total
          </div>
          <div className="text-xs font-['DM_Sans'] font-medium leading-[16px] text-[#00171f] w-2 shrink-0">
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceSummary;

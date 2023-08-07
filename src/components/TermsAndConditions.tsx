import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="flex flex-col gap-2 w-full items-start">
      <div className="whitespace-nowrap text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-[108px]">
        Terms & conditions
      </div>
      <div className="overflow-hidden bg-[#f0f0f0] self-stretch flex flex-col h-16 shrink-0 items-start pl-4 py-4 rounded-lg">
        <div className="whitespace-nowrap text-xs font-['DM_Sans'] leading-[16px] text-[#979797] w-16">
          Enter notes
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

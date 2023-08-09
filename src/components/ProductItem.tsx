import React from "react";

export interface ProductItemProps {
  name: string;
  code: string;
  batch: string;
  amount: string;
  onSelect: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
  name,
  code,
  batch,
  amount,
  onSelect,
}) => {
  return (
    <div
      className="border-solid border-[#f0f0f0] flex flex-row justify-between items-start border-0 cursor-pointer"
      onClick={onSelect}
    >
      <div className="flex flex-col mb-2 gap-1">
        <div className="whitespace-nowrap text-xs font-['DM_Sans'] font-medium leading-[18.2px] text-[#00171f] mr-5">
          {name}
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="text-xs font-['DM_Sans'] tracking-[0.07] leading-[13px] text-[#00a8e8] w-8 shrink-0">
            {code}
          </div>
          <div className="whitespace-nowrap text-xs font-['DM_Sans'] tracking-[0.07] leading-[13px] text-[#979797] w-3/5">
            Batch: {batch}
          </div>
        </div>
      </div>
      <div className="whitespace-nowrap text-xs font-['DM_Sans'] tracking-[0.07] leading-[13px] text-[#979797] mt-3 w-16 shrink-0">
        {amount}
      </div>
    </div>
  );
};

export default ProductItem;

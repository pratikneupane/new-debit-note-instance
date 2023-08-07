import React from "react";

const ProductList = () => {
  return (
    <div className="border-solid border-[#f0f0f0] flex flex-col w-full border-t-0 border-b border-x-0">
      <div className="border-solid border-[#f0f0f0] overflow-hidden bg-white flex flex-col mt-0 gap-5 h-24 shrink-0 items-start border-x-0 border-y">
        <div className="border-solid border-[#f0f0f0] self-stretch flex flex-row gap-8 h-10 shrink-0 items-center px-6 border-0">
          <div className="text-xs font-['DM_Sans'] font-medium leading-[18.2px] text-[#00171f] mr-32 w-20 shrink-0">
            Item/product
          </div>
          <div className="text-xs font-['DM_Sans'] font-medium leading-[18.2px] text-[#00171f] w-8 shrink-0">
            Batch
          </div>
          <div className="text-xs font-['DM_Sans'] font-medium leading-[18.2px] text-[#00171f] mr-1 w-16 shrink-0">
            Warehouse
          </div>
          <div className="text-xs font-['DM_Sans'] font-medium leading-[18.2px] text-[#00171f] mr-6 w-6 shrink-0">
            Qty
          </div>
          <div className="text-xs font-['DM_Sans'] font-medium leading-[18.2px] text-[#00171f] mr-3 w-6 shrink-0">
            Rate
          </div>
          <div className="text-xs font-['DM_Sans'] font-medium leading-[18.2px] text-[#00171f] mr-8 w-12 shrink-0">
            Discount
          </div>
          <div className="text-xs font-['DM_Sans'] font-medium leading-[18.2px] text-[#00171f] mr-16 w-5 shrink-0">
            Tax
          </div>
          <div className="text-xs font-['DM_Sans'] font-medium leading-[18.2px] text-[#00171f] w-12 shrink-0">
            Amount
          </div>
        </div>
        <div className="whitespace-nowrap text-xs font-['DM_Sans'] leading-[16px] text-[#979797] ml-6 w-[117px]">
          Add code or product
        </div>
      </div>
    </div>
  );
};

export default ProductList;

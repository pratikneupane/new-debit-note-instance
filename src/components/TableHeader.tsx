const TableHeader: React.FC = () => {
  return (
    <div className="border-solid border-[#f0f0f0] shadow-[0px_0px_0px_0px_rgba(0,_0,_0,_0.1),_0px_0px_0px_0px_rgba(0,_0,_0,_0.1),_0px_0px_1px_0px_rgba(0,_0,_0,_0.09),_0px_0px_1px_0px_rgba(0,_0,_0,_0.05),_0px_0px_1px_0px_rgba(0,_0,_0,_0.01),_0px_0px_1px_0px_rgba(0,_0,_0,_0)] flex flex-row gap-8 w-full h-10 items-center px-6 border-0 bg-[#ffffff]">
      <div className="text-xs font-['DM_Sans'] font-medium leading-[18.2px] text-[#00171f] w-1/5">
        Item/product
      </div>
      <div className="text-xs font-['DM_Sans'] font-medium leading-[18.2px] text-[#00171f] w-1/12">
        Batch
      </div>
      <div className="text-xs font-['DM_Sans'] font-medium leading-[18.2px] text-[#00171f] w-1/6">
        Warehouse
      </div>
      <div className="text-xs font-['DM_Sans'] font-medium leading-[18.2px] text-[#00171f] w-1/12">
        Qty
      </div>
      <div className="text-xs font-['DM_Sans'] font-medium leading-[18.2px] text-[#00171f] w-1/12">
        Rate
      </div>
      <div className="text-xs font-['DM_Sans'] font-medium leading-[18.2px] text-[#00171f] w-1/6">
        Discount
      </div>
      <div className="text-xs font-['DM_Sans'] font-medium leading-[18.2px] text-[#00171f] w-1/12">
        Tax
      </div>
      <div className="text-xs font-['DM_Sans'] font-medium leading-[18.2px] text-[#00171f] w-1/6">
        Amount
      </div>
    </div>
  );
};

export default TableHeader;

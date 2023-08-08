import React from "react";

/**
 * ProductList Component
 *
 * A component to display the product list header in a form.
 *
 * @component
 * @returns {JSX.Element} ProductList component.
 */
const ProductList: React.FC = () => {
  return (
    <div className="border-solid border-[#f0f0f0] flex flex-col w-full border-t-0 border-b border-x-0">
      <div className="border-solid border-[#f0f0f0] overflow-hidden bg-white flex flex-col mt-0 gap-5 h-24 shrink-0 items-start border-x-0 border-y">
        <div className="border-solid border-[#f0f0f0] self-stretch flex flex-row gap-8 h-10 shrink-0 items-center px-6 border-0">
          <HeaderCell text="Item/product" width="24" />
          <HeaderCell text="Batch" width="12" />
          <HeaderCell text="Warehouse" width="20" />
          <HeaderCell text="Qty" width="10" />
          <HeaderCell text="Rate" width="10" />
          <HeaderCell text="Discount" width="16" />
          <HeaderCell text="Tax" width="9" />
          <HeaderCell text="Amount" width="16" />
        </div>
        <div className="whitespace-nowrap text-xs font-['DM_Sans'] leading-[16px] text-[#979797] ml-6 w-[117px]">
          Add code or product
        </div>
      </div>
    </div>
  );
};

/**
 * HeaderCell Component
 *
 * A component to render a header cell with customizable text and width.
 *
 * @component
 * @param {object} props - The props containing text and width.
 * @returns {JSX.Element} HeaderCell component.
 */
const HeaderCell: React.FC<{ text: string; width: string }> = ({
  text,
  width,
}) => (
  <div
    className={`text-xs font-medium text-center leading-[18.2px] text-[#00171f] mr-${width} w-${width} shrink-0`}
  >
    {text}
  </div>
);

export default ProductList;

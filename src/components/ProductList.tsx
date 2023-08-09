import React, { useState } from "react";
import Modal from "./Modal";
import ProductItem, { ProductItemProps } from "./ProductItem"; // Import the ProductItemProps interface

/**
 * ProductList Component
 *
 * A component to display the product list header in a form.
 *
 * @component
 * @returns {JSX.Element} ProductList component.
 */

const ProductList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<ProductItemProps[]>(
    []
  ); // Array of selected products

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleProductSelect = (product: ProductItemProps) => {
    setSelectedProducts([...selectedProducts, product]); // Add the selected product to the array
  };

  return (
    <div className="border-solid border-[#f0f0f0] flex flex-col w-full border-t-0 border-b border-x-0">
      <div className="border-solid border-[#f0f0f0] overflow-hidden bg-white flex flex-col mt-0 gap-5 shrink-0 items-start border-x-0 border-y">
        <TableHeader />
        <div className="overflow-x-auto">
          <div className="w-full">
            {selectedProducts.map((product, index) => (
              <SelectedProduct
                key={index}
                name={product.name}
                batch={product.batch}
                warehouse={product.warehouse}
                qty={product.qty}
                rate={product.rate}
                discount={product.discount}
                tax={product.tax}
                amount={product.amount}
              />
            ))}
          </div>
        </div>

        <button
          onClick={openModal}
          className="whitespace-nowrap text-xs font-['DM_Sans'] leading-[16px] text-[#979797] ml-6 w-[117px] mt-4"
        >
          Add code or product
        </button>
        {isModalOpen && (
          <Modal closeModal={closeModal} onSelect={handleProductSelect} />
        )}
      </div>
    </div>
  );
};

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

export default ProductList;

interface SelectedProductProps {
  name: string;
  batch: string;
  warehouse: string;
  qty: string;
  rate: string;
  discount: string;
  tax: string;
  amount: string;
}

interface SelectedProductProps {
  name: string;
  batch: string;
  warehouse: string;
  qty: string;
  rate: string;
  discount: string;
  tax: string;
  amount: string;
}

const SelectedProduct: React.FC<SelectedProductProps> = ({
  name,
  batch,
  warehouse,
  qty,
  rate,
  discount,
  tax,
  amount,
}) => {
  return (
    <div className="flex flex-row gap-2 w-full items-center px-4 py-2 border-t border-[#f0f0f0] sm:grid sm:grid-cols-[1fr,1fr,1fr,2fr,2fr,1fr,1fr,1fr,auto] md:grid-cols-[1fr,1fr,1fr,2fr,2fr,1fr,1fr,1fr,auto] lg:grid-cols-[1fr,1fr,1fr,2fr,2fr,1fr,1fr,1fr,auto] xl:grid-cols-[1fr,1fr,1fr,2fr,2fr,1fr,1fr,1fr,auto]">
      <div className="flex flex-col gap-1 mr-16">
        <div className="whitespace-nowrap text-xs font-['DM_Sans'] leading-[16px] text-[#00171f]">
          {name}
        </div>
        <div className="border-dashed border-[#979797] overflow-hidden flex flex-col mr-5 h-8 shrink-0 items-start pl-2 py-2 border-t-0 border-b border-x-0">
          <div className="whitespace-nowrap text-xs font-['DM_Sans'] tracking-[0.07] leading-[13px] text-[#979797] w-3/5">
            Enter description
          </div>
        </div>
      </div>
      <div className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] mr-8 w-10 shrink-0">
        {batch}
      </div>
      <div className="whitespace-nowrap text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-8 shrink-0">
        {warehouse}
      </div>
      <img
        src="https://file.rendit.io/n/oVu7E1vxOO1AzCguLtxr.svg"
        className="mr-3 w-4 shrink-0"
        alt="Warehouse icon"
      />
      <div className="border-dashed border-[#979797] flex flex-row justify-end gap-6 w-20 shrink-0 h-12 items-center border-t-0 border-b border-x-0">
        <div className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-2 shrink-0">
          {qty}
        </div>
        <div className="flex flex-row gap-1 w-8 shrink-0 items-center">
          <div className="text-xs font-['DM_Sans'] leading-[16px] text-[#979797] w-2/5">
            Btl
          </div>
          <img
            src="https://file.rendit.io/n/cZIf5lRepuot7gHVytWQ.svg"
            className="w-4 shrink-0"
            alt="Bottle icon"
          />
        </div>
      </div>
      <div className="border-dashed border-[#979797] flex flex-col justify-center w-20 shrink-0 h-12 items-center border-t-0 border-b border-x-0">
        <div className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-2/5">
          {rate}
        </div>
      </div>
      <div className="border-dashed border-[#979797] flex flex-col justify-center mr-10 w-20 shrink-0 h-12 items-center border-t-0 border-b border-x-0">
        <div className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] w-6">
          {discount}
        </div>
      </div>
      <div className="whitespace-nowrap text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] mr-20 w-10 shrink-0">
        {tax}
      </div>
      <div className="text-xs font-['DM_Sans'] leading-[16px] text-[#00171f] mr-10 w-12 shrink-0">
        {amount}
      </div>
      <img
        src="https://file.rendit.io/n/rcCI8cfjhUQi3Us9rLd4.svg"
        className="w-5 shrink-0"
        alt="Remove icon"
      />
    </div>
  );
};

import React, { useState } from "react";
import Modal from "./Modal";
import SelectedProduct from "./SelectedProducts";
import TableHeader from "./TableHeader";
import InvoiceSummary from "./InvoiceSummary";
import { ProductItemProps } from "./ProductItem";

const ProductList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProducts, setSelectedProducts] = useState<ProductItemProps[]>(
    []
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleProductSelect = (product: ProductItemProps) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const handleProductRemove = (index: number) => {
    const updatedProducts = selectedProducts.filter((_, i) => i !== index);
    setSelectedProducts(updatedProducts);
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
                index={index}
                {...product}
                onRemove={handleProductRemove}
              />
            ))}
          </div>
        </div>

        <button
          onClick={openModal}
          className="whitespace-nowrap text-xs font-['DM_Sans'] leading-[16px] text-[#979797] ml-6 w-[117px] my-4"
        >
          Add code or product
        </button>
        {isModalOpen && (
          <Modal closeModal={closeModal} onSelect={handleProductSelect} />
        )}
      </div>
      {selectedProducts.length > 0 && (
        <InvoiceSummary total={0} grandTotal={0} />
      )}
    </div>
  );
};

export default ProductList;

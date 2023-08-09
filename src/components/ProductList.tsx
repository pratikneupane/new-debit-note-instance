import React, { useState } from "react";
import Modal from "./Modal";
import ProductItem, { ProductItemProps } from "./ProductItem"; // Import the ProductItemProps interface
import SelectedProduct from "./SelectedProducts";
import TableHeader from "./TableHeader";
import InvoiceSummary from "./InvoiceSummary";

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
                name={product.name}
                batch={product.batch}
                amount={product.amount}
                onRemove={handleProductRemove}
              />
            ))}
          </div>
        </div>

        <button
          onClick={openModal}
          className=" whitespace-nowrap text-xs font-['DM_Sans'] leading-[16px] text-[#979797] ml-6 w-[117px] my-4"
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

import React, { useState } from "react";
import ProductItem from "./ProductItem";
import products from "@/constants/products";
import Image from "next/image";

interface Product {
  name: string;
  code: string;
  batch: string;
  amount: string;
}

interface ModalContentProps {
  closeModal: () => void;
  onSelect: (product: Product) => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ closeModal, onSelect }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="bg-white flex flex-col gap-px w-full pt-4 px-4 rounded-lg max-h-[400px] overflow-auto">
      {/* Search product section */}
      <div className="bg-[#f0f0f0] flex flex-row mb-2 h-10 shrink-0 items-center px-3 rounded-lg">
        <Image
          src="https://file.rendit.io/n/TeGLsGwqAzoMP2hO18bj.svg"
          className="w-4 shrink-0"
          alt="Search icon"
          height={5}
          width={5}
        />
        <input
          type="text"
          className="whitespace-nowrap text-xs font-['DM_Sans'] leading-[16px] text-[#979797] w-20 shrink-0 outline-none bg-transparent border-none"
          placeholder="Search product"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>

      {/* List of products */}
      <div className="flex flex-col gap-2 w-[408px] overflow-x-hidden pr-5">
        {filteredProducts.map((product, index) => (
          <ProductItem
            key={index}
            {...product}
            onSelect={() => onSelect(product)}
          />
        ))}
      </div>

      {/* Add New section */}
      <div className="border-solid border-[#f0f0f0] flex flex-col justify-center h-6 pt-2 shrink-0 items-center border-t border-b-0 border-x-0 overflow-hidden">
        <div className="whitespace-nowrap text-xs font-['DM_Sans'] font-medium leading-[16px] text-[#00a8e8] w-12 h-full">
          Add New
        </div>
      </div>
    </div>
  );
};

export default ModalContent;

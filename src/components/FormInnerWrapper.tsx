import React from "react";
import InputGroup from "./common/InputGroup";
import ProductList from "./ProductList";
import CustomFields from "./CustomFields";
import Footer from "./Footer";

const FormInnerWrapper = () => {
  return (
    <div className="flex flex-col gap-4 w-full items-start">
      <div className="w-full flex gap-2 items-start">
        <InputGroup
          label={"Supplier Name"}
          required={true}
          type="dropdown"
          options={["Rausi.com", "Hello Kitty", "Fake Potato"]}
        />
        <InputGroup label={"Date"} required={true} type="date" />
      </div>
      <div className=" w-1/2 self-stretch flex gap-2 items-start">
        <InputGroup label={"Reference"} required={true} type="text" />
      </div>
      <ProductList />
      <CustomFields />
      <Footer />
    </div>
  );
};

export default FormInnerWrapper;

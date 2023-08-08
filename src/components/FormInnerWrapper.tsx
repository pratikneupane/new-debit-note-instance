import React from "react";
import InputGroup from "./common/InputGroup";
import ProductList from "./ProductList";
import CustomFields from "./CustomFields";
import Footer from "./Footer";

/**
 * FormInnerWrapper Component
 *
 * A component to wrap the inner content of a form.
 *
 * @component
 * @returns {JSX.Element} FormInnerWrapper component.
 */
const FormInnerWrapper: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-4 w-full items-start px-6">
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
        <InputGroup
          label={"Reference"}
          required={true}
          type="text"
          placeholder={"Enter Reference"}
        />
      </div>
      <ProductList />
      <CustomFields />
      <div className=" w-full self-stretch flex gap-2 items-start">
        <InputGroup
          label={"Terms & Conditions"}
          required={false}
          type="textarea"
          placeholder={"Enter Notes"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default FormInnerWrapper;

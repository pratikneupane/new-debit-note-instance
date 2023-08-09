import React from "react";
import InputGroup from "./common/InputGroup";
import ProductList from "./ProductList";
import CustomFields from "./CustomFields";

const FormInnerWrapper: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full items-start px-6">
      <div className="w-full flex gap-2 items-start">
        <InputGroup
          label={"Supplier Name"}
          required={true}
          type="dropdown"
          options={[
            "WineHouse Distributors",
            "BrewMaster Imports",
            "GinBoutique Suppliers",
            "WhiskeyWorld Wholesale",
            "VodkaVilla Distributors",
            "RumReserve Enterprises",
            "TequilaTreasures Importers",
            "BrandyBarrel Suppliers",
            "CraftBeer Distributors",
            "SakeSensation Imports",
            "ScotchSelect Wholesalers",
            "CiderCraze Suppliers",
            "LiqueurLuxury Distributors",
            "MoonshineMakers Imports",
            "RyeRevival Wholesalers",
            "BourbonBaron Distributors",
            "AperitifAllure Imports",
            "AbsintheAffair Suppliers",
            "ChampagneChic Wholesalers",
            "CocktailCove Distributors",
          ]}
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
          rows={3}
        />
      </div>
    </div>
  );
};

export default FormInnerWrapper;

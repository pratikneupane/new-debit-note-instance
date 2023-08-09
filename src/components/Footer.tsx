import React from "react";
import Button from "./common/Button";

const Footer: React.FC = () => {
  return (
    <div className="bg-white flex flex-col justify-center pr-6 w-full h-20 items-end">
      <Button label={"Save"} />
    </div>
  );
};

export default Footer;

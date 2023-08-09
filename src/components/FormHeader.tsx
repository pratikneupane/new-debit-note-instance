import React from "react";
import Image from "next/image";

const FormHeader: React.FC = () => {
  return (
    <div className="shadow-[0px_0px_0px_0px_rgba(0,_0,_0,_0.1),_0px_0px_0px_0px_rgba(0,_0,_0,_0.1),_0px_0px_1px_0px_rgba(0,_0,_0,_0.09),_0px_0px_1px_0px_rgba(0,_0,_0,_0.05),_0px_0px_1px_0px_rgba(0,_0,_0,_0.01),_0px_0px_1px_0px_rgba(0,_0,_0,_0)]
     bg-white flex flex-row justify-between w-full h-16 items-center pl-6 pr-8">
      <div className="whitespace-nowrap text-base font-bold tracking-[-0.41] leading-[22px] text-primary w-32 shrink-0">
        New debit note
      </div>
      <Image
        src="./Close.svg"
        className="w-6 shrink-0"
        height={24}
        width={24}
        alt="Close Icon"
      />
    </div>
  );
};

export default FormHeader;

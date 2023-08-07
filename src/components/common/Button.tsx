import React from "react";

const Button = () => {
  function ButtonRootFunction(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    arg1: string
  ): void {
    throw new Error("Function not implemented.");
  }

  return (
    <button
      onClick={(e) => ButtonRootFunction(e, "ButtonRoot")}
      className="bg-[#00a8e8] flex flex-col justify-center w-full h-12 items-center rounded-lg"
    >
      <button className="text-sm font-['DM_Sans'] font-bold tracking-[-0.5] leading-[20px] text-white w-8">
        Save
      </button>
    </button>
  );
};

export default Button;

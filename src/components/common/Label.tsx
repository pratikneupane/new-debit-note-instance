import React from "react";

interface LabelProps {
  label: string;
  required: boolean;
}

const Label: React.FC<LabelProps> = ({ label, required }) => {
  return (
    <div className="flex flex-row justify-between w-1/2 items-center mb-2">
      <label className="whitespace-nowrap text-xs leading-[16px] text-primary w-20">
        {label}
        {required && (
          <span className="text-xs tracking-[0.07] leading-[13px] text-red w-1 shrink-0">
            *
          </span>
        )}
      </label>
    </div>
  );
};

export default Label;

import React from "react";

interface LabelProps {
  label: string;
  required: boolean;
}
const Label = (props: LabelProps) => {
  const { label, required } = props;
  return (
    <div className="flex flex-row justify-between w-1/2 items-center">
      <label className="whitespace-nowrap text-xs leading-[16px] text-primary w-20">
        {label}
        {required ? (
          <span className="text-xs tracking-[0.07] leading-[13px] text-red w-1 shrink-0">
            *
          </span>
        ) : null}
      </label>
    </div>
  );
};

export default Label;

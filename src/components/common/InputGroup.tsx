// components/InputGroup.tsx
import React, { ReactNode } from "react";
import Label from "./Label";
import CustomDropdown from "./CustomDropdown";
import DateInput from "./DateInput";

interface InputGroupProps {
  label: string;
  required: boolean;
  type?: "text" | "dropdown" | "date";
  options?: string[];
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  required,
  type = "text",
  options,
}) => {
  const renderInput = (): ReactNode => {
    switch (type) {
      case "text":
        return <input className="border p-2 rounded-md" type="text" />;
      case "dropdown":
        return <CustomDropdown options={options || []} />;
      case "date":
        return <DateInput />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Label label={label} required={required} />
      {renderInput()}
    </div>
  );
};

export default InputGroup;

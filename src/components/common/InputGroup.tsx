import React, { ReactNode } from "react";
import Label from "./Label";
import CustomDropdown from "./CustomDropdown";
import DateInput from "./DateInput";

interface InputGroupProps {
  label: string;
  required: boolean;
  type?: "text" | "dropdown" | "date" | "textarea";
  options?: string[];
  placeholder?: string;
  rows?: number;
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  required,
  type = "text",
  options,
  placeholder,
  rows = 1,
}) => {
  const renderInput = (): ReactNode => {
    switch (type) {
      case "text":
        return (
          <input
            placeholder={placeholder}
            className="bg-input text-xs w-full h-12 px-4 rounded-lg outline-none"
            type="text"
          />
        );
      case "dropdown":
        return <CustomDropdown options={options || []} />;
      case "date":
        return <DateInput />;
      case "textarea":
        return (
          <textarea
            placeholder={placeholder}
            className="bg-input text-xs w-full px-4 py-2 rounded-lg resize-none outline-none"
            rows={rows}
          ></textarea>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full mb-4">
      <Label label={label} required={required} />
      {renderInput()}
    </div>
  );
};

export default InputGroup;

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
  rows?: number; // Add the rows prop
}

/**
 * InputGroup Component
 *
 * A versatile component that renders different types of input fields based on the provided type prop.
 *
 * @component
 * @param {InputGroupProps} props - Component props
 * @returns {JSX.Element} InputGroup component.
 */
const InputGroup: React.FC<InputGroupProps> = ({
  label,
  required,
  type = "text",
  options,
  placeholder,
  rows = 1, // Default value for rows is 1
}) => {
  /**
   * Render input field based on the provided type prop.
   *
   * @returns {ReactNode} Rendered input field.
   */
  const renderInput = (): ReactNode => {
    switch (type) {
      case "text":
        return (
          <input
            placeholder={placeholder}
            className={`bg-input text-xs w-full h-12 px-4 rounded-lg outline-none`}
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
            className={`bg-input text-xs w-full px-4 py-2 rounded-lg resize-none outline-none`}
            rows={rows} // Use the dynamic rows prop
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

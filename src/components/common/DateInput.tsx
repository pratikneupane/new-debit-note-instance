import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { format } from "date-fns";

/**
 * DateInput Component
 *
 * A reusable date input component that displays a date picker and formats selected dates.
 *
 * @component
 * @returns {JSX.Element} DateInput component.
 */
const DateInput: React.FC = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  /**
   * Handle input change event.
   * Updates the input value as the user types.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - Input change event.
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  /**
   * Handle input blur event.
   * Parses the input value and updates the selected date on blur if valid.
   */
  const handleInputBlur = () => {
    const parsedDate = new Date(inputValue);
    if (!isNaN(parsedDate.getTime())) {
      setSelectedDate(parsedDate);
    }
  };

  /**
   * Format date to "dd/MM/yyyy" format.
   *
   * @param {Date | null} date - Date to be formatted.
   * @returns {string} Formatted date string.
   */
  const formatDate = (date: Date | null): string => {
    return date ? format(date, "dd/MM/yyyy") : "";
  };

  return (
    <div className="flex items-center w-full">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        customInput={
          <div className="relative w-full">
            <input
              className="overflow-hidden bg-input flex flex-row justify-between w-full h-12 items-center px-4 text-xs rounded-lg outline-none"
              type="text"
              placeholder="dd/mm/yyyy"
              value={inputValue || formatDate(selectedDate)}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            <div className="absolute right-5 top-[50%] -translate-y-1/2 p-2">
              <FaCalendarAlt />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default DateInput;

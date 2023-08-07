// components/DateInput.tsx
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const DateInput: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <div className="flex items-center">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        customInput={
          <div className="relative">
            <input
              className="border p-2 rounded-md w-full pr-10 focus:outline-none focus:border-none"
              type="text"
              placeholder="Select a date"
              value={selectedDate ? selectedDate.toDateString() : ""}
              readOnly
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

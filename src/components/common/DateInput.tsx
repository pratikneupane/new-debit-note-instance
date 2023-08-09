import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import { format } from "date-fns";

interface DateInputProps {}

const DateInput: React.FC<DateInputProps> = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputBlur = () => {
    const parsedDate = new Date(inputValue);
    if (!isNaN(parsedDate.getTime())) {
      setSelectedDate(parsedDate);
    }
  };

  const formatDate = (date: Date | null): string => {
    return date ? format(date, "dd/MM/yyyy") : "";
  };

  return (
    <div className="flex items-center w-full">
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
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
              <Image
                src="./calender.svg"
                height={20}
                width={20}
                alt="Calendar Icon"
              />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default DateInput;

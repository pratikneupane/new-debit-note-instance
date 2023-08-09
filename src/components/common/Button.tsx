import React, { FC } from "react";

interface ButtonProps {
  label: string;
  bgColor?: string;
  textColor?: string;
  padding?: string;
}

const Button: FC<ButtonProps> = ({ label, bgColor = "#00a8e8", textColor = "white", padding = "12" }) => {
  return (
    <button
      className={`bg-${bgColor} text-${textColor} px-${padding} py-${padding} flex flex-col justify-center items-center rounded-lg`}
    >
      {label}
    </button>
  );
};

export default Button;

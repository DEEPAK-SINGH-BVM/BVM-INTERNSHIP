import React from "react";

const Button = ({ color,disabled, label = "Click Here", onClick }) => {
  return (
    <button
      className={`w-[100px] border-2 border border-gray-300 p-2 bg${color} text-white cursor-pointer m-1`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
export default Button;
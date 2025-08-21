import React from "react";

export  const Input = ({ name, type, value, onChange, placeholder }) => {
  return (
    // <button
    //   className={`w-[100px] border-2 border border-gray-300 p-2 bg${color} text-white cursor-pointer `}
    //   onClick={onClick}
    // >
    //   {label}
    // </button>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={"text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"}
      placeholder={placeholder}
    />
  );
};

export  const InputSignup = ({ name, type, value, onChange, placeholder }) => {
  return (
    // <button
    //   className={`w-[100px] border-2 border border-gray-300 p-2 bg${color} text-white cursor-pointer `}
    //   onClick={onClick}
    // >
    //   {label}
    // </button>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={`bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black`}
      placeholder={placeholder}
    />
  );
};
export const InputSelectSignup = ({ value,onChange ,  checked }) => {
  return (
    // <button
    //   className={`w-[100px] border-2 border border-gray-300 p-2 bg${color} text-white cursor-pointer `}
    //   onClick={onClick}
    // > 
    //   {label}
    // </button>
    <input
      name={"language"}
      type={"checkbox"}
      value={value}
      className={"m-1"}
      onChange={onChange}
      checked={checked}
    />
  );
};
/*
   <input
      type="checkbox"
      name="language"
      value="English"
      className="m-1"
      checked={user.language.includes("English")}
      onChange={inputHandleLanguage}
      />
*/
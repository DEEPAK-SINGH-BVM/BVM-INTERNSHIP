/*
text-slate-900 text-sm font-medium mb-2 block
   <label className="text-slate-900 text-sm font-medium mb-2 block">
*/

export const Label = ({ label }) => {
  return (
    // <button
    //   className={`w-[100px] border-2 border border-gray-300 p-2 bg${color} text-white cursor-pointer `}
    //   onClick={onClick}
    // >
    //   {label}
    // </button>
    <label className="text-slate-900 text-sm font-medium mb-2 block">
      {label}
    </label>
  );
};

export const LabelSelect = ({ label }) => {
  return (
    // <button
    //   className={`w-[100px] border-2 border border-gray-300 p-2 bg${color} text-white cursor-pointer `}
    //   onClick={onClick}
    // >
    //   {label}
    // </button>
    <label className="block mb-2 text-sm font-medium text-gray-900">
      {label}
    </label>
  );
};

export const LabelSignup = ({ label }) => {
  return <label className="block mb-2 text-sm text-white">{label}</label>;
};

export const LabelLogin = ({ label }) => {
  return (
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {label}
    </label>
  );
};



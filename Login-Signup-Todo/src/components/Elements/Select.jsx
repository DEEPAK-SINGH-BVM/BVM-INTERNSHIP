const Select = ({ name,  value, onChange }) => {
  return (
 
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500`}
    ></select>
  );
};
export default Select;

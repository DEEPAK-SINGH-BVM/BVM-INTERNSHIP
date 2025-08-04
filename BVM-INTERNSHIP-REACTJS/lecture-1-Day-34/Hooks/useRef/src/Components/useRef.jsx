import { useRef, useEffect, useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState();
  const previousValue = useRef();

  useEffect(() => {
    previousValue.current = inputValue;
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value : {inputValue}</h2>
      <h2>Previous Value : {previousValue.current}</h2>
    </div>
  );
}

export default Form;

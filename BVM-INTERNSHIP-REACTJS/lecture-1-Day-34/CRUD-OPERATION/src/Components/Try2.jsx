import React, { useState } from "react";

function MultiCheckboxForm() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected items on submit:", selectedItems);
    setSelectedItems([]);
  };

  const items = ["apple", "banana", "orange"];

  return (
    <form onSubmit={handleSubmit}>
      {items.map((item) => (
        <label key={item}>
          <input
            type="checkbox"
            value={item}
            checked={selectedItems.includes(item)}
            onChange={handleCheckboxChange}
          />
          {item}
        </label>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
export default MultiCheckboxForm;
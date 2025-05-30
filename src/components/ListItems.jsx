import React, { useEffect, useState } from "react";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addItem() {
    setItems([...items, inputValue]);
    setInputValue("");
  }

  useEffect(() => {
    console.log("Component ListItems updated");
  }, [items]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add element</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;

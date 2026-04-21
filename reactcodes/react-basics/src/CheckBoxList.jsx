import { useState } from "react";

function CheckBoxList() {
  const [selected, setSelected] = useState([]);

  const items = ["Apple", "Banana", "Mango"];

  const handleCheck = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter(item => item !== value));
    }
  };

  return (
    <div>
      <h2>Select Fruits</h2>

      {items.map((item) => (
        <label key={item}>
          <input
            type="checkbox"
            value={item}
            onChange={handleCheck}
          />
          {item}
        </label>
      ))}

      <h3>Selected: {selected.join(", ")}</h3>
    </div>
  );
}

export default CheckBoxList;
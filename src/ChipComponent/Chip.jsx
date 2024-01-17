import  { useState } from "react";
import "./Chip.css";

const Chip = () => {
  const [inputValue, setInputValue] = useState("");
  const [chips, setChips] = useState([]);
  const [items, setItems] = useState([
    "Nick Gian",
    "Narayan Gamer",
    "Anita Gros",
    "Megan Smith",
  ]);

  const handleInputChange = (e) => {
    const value = e.target.value
    setInputValue(value);

    if(value === "" && e.key === "Backspace" && chips.length > 0){
        const lastChip = chips[chips.length - 1];
        handleChipRemove(lastChip)
      }
  };

  const handleItemClick = (item) => {
    setChips([...chips, item]);
    setItems(items.filter((i) => i !== item));
    setInputValue("");
  };

  const handleChipRemove = (chip) => {
    setChips(chips.filter((c) => c !== chip));
    setItems([...items, chip]);
  };

  return (
    <div className="box-container">
      <div className="box">
        <div className="chips">
          {chips.map((chip, index) => (
            <div key={index} className="chip">
              {chip}
              <span
                className="chip-remove"
                onClick={() => handleChipRemove(chip)}
              >
                &#10006;
              </span>
            </div>
          ))}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputChange}
            placeholder="Type to search"
            className="input"
          />
        </div>
        {inputValue && (
          <div className="item-list">
            {items
              .filter((item) =>
                item.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((item, index) => (
                <div
                  key={index}
                  className="item"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chip;
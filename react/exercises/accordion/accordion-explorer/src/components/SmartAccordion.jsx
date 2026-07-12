import { useState } from "react";
import "../css/smartAccordion.css";

export default function SmartAccordion({ data }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [singleSelectMode, setSingleSelectMode] = useState(true);

  function getFirstItem(array) {
    return Array.isArray(array) && array.length > 0 ? array[0] : null;
  }

  function handleSelection(itemId) {
    setSelectedItems((prevSelected) => {
      // If the item is already selected, remove it
      if (prevSelected.includes(itemId)) {
        return prevSelected.filter((currentItemId) => currentItemId !== itemId);
      }

      // If in single select mode, return only the newly selected item
      if (singleSelectMode) {
        return [itemId];
      }

      // In multi-select mode, add the new item to the selected items
      return [...prevSelected, itemId];
    });
  }

  function handleSingleSelection() {
    if (!singleSelectMode) {
      setSelectedItems((prevSelected) => [getFirstItem(prevSelected)]);
    }
    setSingleSelectMode((prevVal) => !prevVal);
  }

  return (
    <div className="smartAccordion">
      <button className="selectionModeButton" onClick={handleSingleSelection}>
        {singleSelectMode
          ? "Enable Multi Selection Mode"
          : "Enable Single Selection Mode"}
      </button>
      <div className="accordionContainer">
        {data.map(({ id, title, description }) => (
          <div
            className="accordionItem"
            key={id}
            onClick={() => handleSelection(id)}
          >
            <div className="accordionTitle">{title}</div>
            {selectedItems.includes(id) && (
              <div className="accordionDescription">{description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
import { useState } from "react";
import MenuList from "./MenuList";
export default function MenuItem({ item }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li>
      <div
        onClick={() => {
          setExpanded((prevValue) => !prevValue);
        }}
      >
        {item.label}

        {item.children && item.children.length > 0 && (
          <span className="expand">{expanded ? "-" : "+"}</span>
        )}
      </div>

      {expanded && item.children && item.children.length > 0 && (
        <MenuList listOfItems={item.children} />
      )}
    </li>
  );
}

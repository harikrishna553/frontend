import { useState } from "react";
import "../css/accordion.css";

export default function Accordion({ data }) {
  const [selected, setSelected] = useState(null);

  function handleSelection(selectedIndex) {
    //console.log(selectedIndex);
    // selectedIndex === selected If user clicks on already expanded one, we can close that, else set the selection to selectedIndex
    setSelected(selectedIndex === selected ? null : selectedIndex);
  }

  return (
    <div className="centered-item">
      <div className="accordionContainer">
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={item.id}
              className="accordionItem"
              onClick={(event) => {
                handleSelection(index);
              }}
            >
              <div className="accordionTitle">
                {item.title}

                <span className="plusButton">+</span>
              </div>

              {selected === index ? (
                <div className="accordionDescription">{item.description}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}

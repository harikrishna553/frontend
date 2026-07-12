import { useState } from "react";
import "./styles.css";

export default function MultiTab({ tabsContent }) {
  const [tabIndex, setTabIndex] = useState(null);

  return (
    <div className="tabs-root">
      <div className="tabs-labels">
        {tabsContent.map((content, index) => (
          <div
            key={content.id}
            className={`tab-label ${
              tabIndex === index ? "active" : "inactive"
            }`}
            onClick={(event) => {
              {
                console.log(
                  `tabIndex: ${tabIndex}, index : ${index} and content: ${content.data}`
                );
              }
              setTabIndex(index);
            }}
          >
            {content.label}
          </div>
        ))}
      </div>

      {tabsContent.map(
        (content, index) =>
          tabIndex === index && (
            <div className="tab-content" key={content.id}>
              {content.data}
              {console.log(
                `tabIndex: ${tabIndex}, index : ${index} and content: ${content.data}`
              )}
            </div>
          )
      )}
    </div>
  );
}

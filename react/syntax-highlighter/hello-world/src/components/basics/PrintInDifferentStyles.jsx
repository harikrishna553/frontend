import * as prismStyles from "react-syntax-highlighter/dist/esm/styles/prism";
import * as hljsStyles from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighterPrism } from "react-syntax-highlighter"; // Using Prism
import { Light as SyntaxHighlighterHljs } from "react-syntax-highlighter"; // Using Highlight.js

export default function PrintInDifferentStyles() {
  const codeString = `let a = 10;`;

  let allPrismStyles = Object.keys(prismStyles);
  let allHljsStyles = Object.keys(hljsStyles);

  const listStyles = {
    margin: 5,
    border: "1px solid black",
    padding: 5,
    boxShadow: "0 2px 2px rgba(0, 0, 0, 0.2)",
    fontSize: "1.1em",
  };

  const ulStyles = {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    border: "1px solid black",
    padding: 5,
    borderRadius: 10,
    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)",
    marginLeft: "2vw",
  };

  let containerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "98%",
  };

  return (
    <div>
      <div style={containerStyles}>
        <h1>Prism Styles Demo</h1>
        <ul style={ulStyles}>
          {allPrismStyles.map((style, index) => {
            return (
              <li key={`prefix-${index}`} style={listStyles}>
                <h4>{style}</h4>
                <SyntaxHighlighterPrism
                  language="javascript"
                  style={prismStyles[style]}
                >
                  {codeString}
                </SyntaxHighlighterPrism>
              </li>
            );
          })}
        </ul>
      </div>

      <div style={containerStyles}>
        <h1>Hljs Styles Demo</h1>
        <ul style={ulStyles}>
          {allHljsStyles.map((style, index) => {
            return (
              <li key={`prefix-${index}`} style={listStyles}>
                <h4>{style}</h4>
                <SyntaxHighlighterPrism
                  language="javascript"
                  style={hljsStyles[style]}
                >
                  {codeString}
                </SyntaxHighlighterPrism>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

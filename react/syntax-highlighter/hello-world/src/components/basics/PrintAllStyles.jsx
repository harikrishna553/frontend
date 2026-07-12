import * as prismStyles from "react-syntax-highlighter/dist/esm/styles/prism";
import * as hljsStyles from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function PrintAllStyles() {
  let allHljsStyles = Object.keys(hljsStyles);
  let allPrismStyles = Object.keys(prismStyles);

  console.log(allHljsStyles);
  console.log(allPrismStyles);

  const listStyles = {
    height: 20,
    margin: 10,
    border: "1px solid black",
    padding: 10,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    fontSize: "1.2em",
  };

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    width: "90vw",
    justifyContent: "center",
    alignItems: "center",
  };

  const ulStyles = {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    border: "1px solid black",
    padding: 5,
    borderRadius: 20,
    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)",
    marginLeft: "5vw",
  };

  return (
    <div style={containerStyles}>
      <div style={{ margin: 20 }}>
        <h1 style={{ textAlign: "center" }}>Prism Styles</h1>
        <ul style={ulStyles}>
          {allPrismStyles.map((style, index) => {
            return <li style={listStyles}>{style}</li>;
          })}
        </ul>
      </div>

      <div style={{ margin: 20 }}>
        <h1 style={{ textAlign: "center" }}>Hljs Styles</h1>
        <ul style={ulStyles}>
          {allHljsStyles.map((style, index) => {
            return <li style={listStyles}>{style}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

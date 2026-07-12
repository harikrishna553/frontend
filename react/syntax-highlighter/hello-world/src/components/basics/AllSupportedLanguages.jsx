import SyntaxHighlighter from "react-syntax-highlighter";

export default function AllSupportedLanguages() {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#333",
        }}
      >
        Total Supported Languages are:{" "}
        {SyntaxHighlighter.supportedLanguages.length}
      </h1>

      <ul
        style={{
          width: "90vw",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "flex-start",
          paddingLeft: "5vw",
          listStyle: "none",
        }}
      >
        {SyntaxHighlighter.supportedLanguages.map((language, index) => {
          return (
            <li
              key={language}
              style={{
                height: 20,
                margin: 10,
                border: "1px solid black",
                padding: 10,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                fontSize: "1.2em",
              }}
            >
              {language}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

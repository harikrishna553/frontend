import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; // Using Prism
import {
  dark,
  tomorrow,
  nord,
  zTouch,
} from "react-syntax-highlighter/dist/esm/styles/prism"; // Prism.js theme

export default function LanguageSetting() {
  const javaCode = ` public static boolean isEven(int number) {
        return number % 2 == 0;
    }`;

  const javascriptCode = `function isEven(number) {
    return number % 2 === 0;
    }`;

  const cCode = `bool isEven(int number) {
    return number % 2 == 0;
}`;

  const pythonCode = `def is_even(number):
    return number % 2 == 0`;

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        gap: 20,
        backgroundColor: "#d0d0d0",
        justifyContent: "center",
        alignItems: "Center",
      }}
    >
      <div>
        <h2>JavaScript</h2>
        <SyntaxHighlighter language="javascript" style={dark}>
          {javascriptCode}
        </SyntaxHighlighter>
      </div>

      <div>
        <h2>Java Code</h2>
        <SyntaxHighlighter language="java" style={tomorrow}>
          {javaCode}
        </SyntaxHighlighter>
      </div>

      <div>
        <h2>C Code</h2>
        <SyntaxHighlighter language="java" style={nord}>
          {cCode}
        </SyntaxHighlighter>
      </div>

      <div>
        <h2>Python Code</h2>
        <SyntaxHighlighter language="java" style={zTouch}>
          {pythonCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

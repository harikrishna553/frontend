import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; // Using Prism
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism"; // Prism.js theme

export default function ShowLineNumbers() {
  const codeString = `function generateFibonacci(n) {
        if (n <= 0) return [];
        if (n === 1) return [0];
        if (n === 2) return [0, 1];
    
        const fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib;
    }
    
    // Example Usage:
    console.log(generateFibonacci(10));
    // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    `;

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
        <h2>Highlighted Using Prism</h2>
        <SyntaxHighlighter language="javascript" style={darcula} showLineNumbers>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

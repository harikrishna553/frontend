import SyntaxHighlighter from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function HelloWorld() {
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
    <SyntaxHighlighter
      language="javascript"
      style={twilight}
      sx={{
        width: 200,
      }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
}

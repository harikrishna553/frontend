import { useState } from "react";
import useLogger from "../hooks/useLogger";

export default function Counter() {
  const [count, setCount] = useState(0);
  useLogger("Counter");

  return (
    <>
      <p>Counter : {count}</p>

      <button onClick={() => setCount((currentCount) => count + 1)}>
        Click Me
      </button>
    </>
  );
}

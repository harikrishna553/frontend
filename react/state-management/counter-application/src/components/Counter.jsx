import { useState } from "react";

export default function Counter() {
  // Initialize the count to 0
  const [count, updateCount] = useState(0);

  function increment() {
    updateCount(count + 1);
  }

  function decrement() {
    updateCount(count - 1);
  }

  function reset() {
    updateCount(0);
  }

  return (
    <div>
      <h1>Count = {count} </h1>

      <button onClick={increment}>Increment</button>&nbsp;&nbsp;
      <button onClick={decrement}>Decrement</button>&nbsp;&nbsp;
      <button onClick={reset}>Reset</button>
    </div>
  );
}

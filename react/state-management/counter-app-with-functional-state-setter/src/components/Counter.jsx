import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function resetCount() {
    setCount((prevCount) => 0);
  }

  return (
    <>
      <p>Count = {count}</p>
      <button onClick={incrementCount}>Increment</button> &nbsp;
      <button onClick={decrementCount}>Decrement</button> &nbsp;
      <button onClick={resetCount}>Reset</button> &nbsp;
    </>
  );
}

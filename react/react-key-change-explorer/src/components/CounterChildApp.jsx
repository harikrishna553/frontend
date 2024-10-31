import { useState } from "react";

export default function CounterChildApp({ name }) {
  const [count, setCount] = useState(0);

  console.log("Rendered CounterChildApp.....");

  return (
    <div className="counterChildApp">
      <p className="para">Child Application Name : {name}</p>
      <p className="para">Counter : {count}</p>

      <button
        className="button childCounter"
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment Counter
      </button>
    </div>
  );
}

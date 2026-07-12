import { useState } from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`randomNumber : ${randomNumber}`);
  return randomNumber;
}

export default function Counter() {
  const [count, setCount] = useState(() => {
    return getRandomInt(10, 100);
  });

  return (
    <div className="container">
      <div className="counterApp">
        <p id="counterInfo">Current Counter : {count}</p>

        <button
          id="incCounter"
          onClick={() => {
            setCount((prevValue) => prevValue + 1);
          }}
        >
          Increment By 1
        </button>
      </div>
    </div>
  );
}

import { useCallback, useEffect, useState } from "react";

export default function HelloWorld() {
  const [counter, setCounter] = useState(0);
  let localVar1 = 0;
  let localVar2 = 0;

  const memoziedFunction = useCallback(() => {
    localVar1++;
    console.log(`Memoized function : localVar : ${localVar1}`);
  }, []);

  const regularFunction = () => {
    localVar2++;
    console.log(`Regular function : localVar : ${localVar2}`);
  };

  useEffect(() => {
    memoziedFunction();
    regularFunction();
  }, [counter]);

  return (
    <div>
      <button
        onClick={(event) => {
          setCounter((counter) => counter + 1);
        }}
      >
        Increment Counter
      </button>
    </div>
  );
}

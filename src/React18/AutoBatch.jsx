import React, { useState } from "react";

const AutoBatch = () => {
  console.log("COMPONENT FUNCTION EXECUTED");

  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter((counterww) => counterww + 1);
    setCounter((curCounter) => curCounter + 2);
  }

  function increaseCounter_Async() {
    setTimeout(() => {
      setCounter((curCounter) => curCounter + 1);
      setCounter((curCounter) => curCounter + 2);
      setCounter((curCounter) => curCounter + 2);
    }, 200);
  }

  return (
    <div>
      <section>
        <button onClick={increaseCounter}>Increase Counter</button>
        <button onClick={increaseCounter_Async}>
          Increase Counter (with Timeout)
        </button>
      </section>
      <p>Counter: {counter}</p>
    </div>
  );
};

export default AutoBatch;

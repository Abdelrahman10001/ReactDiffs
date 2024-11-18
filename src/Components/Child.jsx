import React, { useRef, useState } from "react";

const Child = ({ setfromMyChild }) => {
  const [TestState, setTestState] = useState({ name: "ali" });

  return (
    <div>
      child
      <h3>Test State: {TestState.name}</h3>
      <button onClick={() => setfromMyChild("Hello Dad this is your son")}>
        Click me{" "}
      </button>
      <button onClick={() => (TestState.name = "I've changed witout using the setState")}>
        Reset Test State
      </button>
    </div>
  );
};

export default Child;

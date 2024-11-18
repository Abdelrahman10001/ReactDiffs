import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [fromMyChild, setfromMyChild] = useState("");

  return (
    <div className="d-flex">
      <h3>Parent component {fromMyChild} </h3>
      <Child setfromMyChild={setfromMyChild} />
    </div>
  );
};

export default Parent;

import React, { useState } from "react";

const PushIntoArr = () => {
  const [first, setfirst] = useState([1, 2, 3]);
  const [sedond, setsedond] = useState("lksdjf");

  const handleClick = () => {
    // const asadikj = first.concat(4);
     first.push(4);
    // setfirst(asadikj);
  };
  const handleClicksss = () => {
    setsedond("0000000");
  };
  return (
    <div>
      {console.log("first", first)}
      <h2>String before pushing: {sedond}</h2>
      <h2>Array before pushing: {first}</h2>
      <button onClick={handleClick}>push Into the Array</button>
      <button onClick={handleClicksss}>push Into the Array</button>
    </div>
  );
};

export default PushIntoArr;

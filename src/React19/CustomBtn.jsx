import React, { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

const CustomBtn = () => {
  const { pending, data, method } = useFormStatus();
  const ali = data?.get("username");

  const [first, setfirst] = useState("");
  useEffect(() => {
    setfirst(ali);
  }, [ali]);

  console.log(ali, method, "sdlkfjls");
  return (
    <>
      <button type="submit" disabled={pending}>
        {"Login"}
      </button>
      <span>{pending ? `Adding ${first}` : ""}</span>
    </>
  );
};

export default CustomBtn;

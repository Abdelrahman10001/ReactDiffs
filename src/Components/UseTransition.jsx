import React, { useId, useState, useTransition } from "react";

function UseTransition() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const usid = useId()
  const usid2 = useId()
  console.log(usid,usid2,"leksdf");

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    // startTransition(() => {
      // Simulate a delay to make isPending noticeable
        setResults(
          Array.from(
            { length: 20000 },
            (_, index) => `${newQuery} Result ${index + 1}`
          )
        );
    // });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {isPending && <p>Loading results...</p>}
      <div>
        {results.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
    </div>
  );
}

export default UseTransition;

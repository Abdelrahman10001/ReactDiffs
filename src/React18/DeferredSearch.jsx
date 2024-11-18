import React, { useState, useMemo } from "react";
import { useDeferredValue } from "react";

function DeferredSearch() {
  const [query, setQuery] = useState("");

  const deferredQuery = useDeferredValue(query);

  console.log({ query, deferredQuery });

  // This recalculates results every time `query` changes, causing potential lag if the computation is heavy.
  const results = useMemo(() => {
    console.log("Second log")
    return Array.from(
      { length: 20000 },
      (_, index) => `${deferredQuery} Result ${index + 1}`
    );
  }, [deferredQuery]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Deferred Search..."
      />
      <div>
        {results?.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
    </div>
  );
}

export default DeferredSearch;

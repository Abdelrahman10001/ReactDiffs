// components/HitCounterDisplay.js
"use client";
import { useState, useEffect } from "react";

const HitCounterDisplay = ({ initialHits }) => {
  const [hits, setHits] = useState(initialHits);

  // Optional: Fetch updates from the API on the client side if needed
  useEffect(() => {
    const fetchHits = async () => {
      const response = await axios.get("/api/hits");
      setHits(response.data);
    };
    fetchHits();
  }, []);

  return <div>Number of hits: {hits}</div>;
};

export default HitCounterDisplay;

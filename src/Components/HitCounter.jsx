// components/HitCounter.server.js
import HitCounterDisplay from "./HitCounterDisplay";
import axios from "axios";

const HitCounter = async () => {
  // Fetch hits from API on the server side
  const response = await axios.get("/api/hits");
  const hits = response.data;

  return <HitCounterDisplay initialHits={hits} />;
};

export default HitCounter;

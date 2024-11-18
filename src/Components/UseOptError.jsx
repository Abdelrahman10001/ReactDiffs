import { useOptimistic, useState } from "react";

function ProfileEditor() {
  const [name, setName] = useState("John Doe");
  const [error, setError] = useState(null);

  const updateName = useOptimistic(async (newName) => {
    try {
      const response = await fetch("/api/update-name", {
        method: "POST",
        body: JSON.stringify({ name: newName }),
      });
      if (!response.ok) {
        throw new Error("Failed to update name");
      }
      return await response.json(); // Assume successful response format
    } catch (error) {
      setError(error.message);
      return null; // Return null to indicate failure
    }
  });

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async () => {
    const updatedName = updateName(name); // Trigger optimistic update
    if (updatedName) {
      // Optimistic update successful, update local state (optional)
      setName(updatedName.name);
    } else {
      // Error occurred, display error message
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={handleSubmit}>
        {isLoading ? "Saving..." : "Save Name"}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

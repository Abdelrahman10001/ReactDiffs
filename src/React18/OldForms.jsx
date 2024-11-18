import { useState } from "react";
import { loginUser } from "../api/userAuth";
import CustomBtn from "../React19/CustomBtn";

const OldForms = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsPending(true);
    setUser(null);
    setError(null);

    try {
      const response = await loginUser(username, password);
      setUser(response.data);
    } catch (error) {
      setError(error.error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <CustomBtn />

      {user && <p style={{ color: "green" }}>Logged in: {user.email}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isPending && <p style={{ color: "blue" }}>{"Loading"}</p>}
    </form>
  );
};

export default OldForms;
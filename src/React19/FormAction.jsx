import { useActionState, useState } from "react";
import { loginUser } from "../api/userAuth";
import CustomBtn from "./CustomBtn";
// import CustomBtn from "./CustomBtn";
const FormAction = () => {
  // const [first, setfirst] = useState("");
  const [oasswird, setoasswird] = useState("")
    
  const [userState, submitAction, isPending] = useActionState(newHandle, {
    name: null,
    error: null,
  });

  async function newHandle(previousState, formData) {
    const name = formData.get("username");
    const password = formData.get("password");

    setoasswird(password)

    const fakekk = Object.fromEntries(formData);

    console.log(fakekk, "klksad");

    try {
      const response = await loginUser(name, password);

      // setfirst(name);
      console.log(response,"slkdfj")
      return { name: response.data };
    } catch (error) {
      return { error: error.error, name: previousState.name };
    }
  }
  console.log(userState,"sldkf");

  return (
    <form action={submitAction}>
      <div>
        <label>Username:</label>
        <input type="text" name={"username"} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name={"password"} required />
      </div>

      {/* <button type="submit" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </button> */}

      <CustomBtn />

      {userState?.name && (
        <p style={{ color: "green" }}>Logged in: {userState?.data?.email}</p>
      )}

      {userState?.error && <p style={{ color: "red" }}>{userState?.error}</p>}
    </form>
  );
};

export default FormAction;

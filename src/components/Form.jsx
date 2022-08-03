import { useState } from "react";
import useAtuh from "../hooks/useAuth";

const Form = () => {
  const { hola } = useAtuh();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    email,
    password,
    id: null,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="login" onClick={handleSubmit} />
      </form>
    </>
  );
};

export default Form;

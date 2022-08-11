import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { postAPI } from "../helpers/API";
import { setStorage, readStorage, clearStorage } from "../helpers/LocalStorage";

const Form = () => {
  const { user, setUser, setLogged } = useAuth();

  const [email, setEmail] = useState("");
  const [discordId, setDiscordId] = useState("");

  const valuesInput = {
    email,
    discordId,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setUser(valuesInput);
    console.log(await user);
    const token = await postAPI(valuesInput);
    setStorage(await token);
    setLogged(true);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Discord"
          value={discordId}
          onChange={(e) => setDiscordId(e.target.value)}
        />
        <input type="submit" value="login" onClick={handleSubmit} />
      </form>
    </>
  );
};

export default Form;

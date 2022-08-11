import { clearStorage } from "../helpers/LocalStorage";
import useAuth from "../hooks/useAuth";

const Logged = () => {
  const { setLogged } = useAuth();

  const handleClear = (e) => {
    e.preventDefault();
    clearStorage();
    setLogged(false);
  };

  return (
    <div>
      <h2>Logged</h2>
      <button onClick={handleClear}>Logout</button>
    </div>
  );
};

export default Logged;

import { clearStorage } from "../helpers/LocalStorage";
import useAuth from "../hooks/useAuth";
import List from "./todo/List";
import TaskForm from "./todo/TaskForm";

const LoggedComponent = () => {
  const { setLogged } = useAuth();

  const handleClear = (e) => {
    e.preventDefault();
    clearStorage();
    setLogged(false);
  };

  return (
    <div className="container p-5">
      <TaskForm />
      <List />
      <button className="btn btn-dark btn-lg btn-block" onClick={handleClear}>Logout</button>
    </div>
  );
};

export default LoggedComponent;

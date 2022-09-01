import { useEffect } from "react";
import { TasksProvider } from "../context/TasksProvider";
import useAuth from "../hooks/useAuth";
import LoginForm from "./LoginForm";
import LoggedComponent from "./LoggedComponent";
import Header from "./Header";
import AuthService from "../services/authService";

const Main = () => {
  const { logged, setLogged, setUser } = useAuth();
  const authService = new AuthService();

  async function checkAuth() {
    authService.check().then((res) => {
      setUser(res);
      setLogged(true);
    });
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <TasksProvider>
      <Header />
      {/* {logged ? <LoggedComponent /> : <LoginForm />} */}
      <LoginForm />
      {logged ? (
        <div>
          <p>Bienvenido</p>
        </div>
      ) : (
        <div>
          <p>Debes iniciar sesion</p>
        </div>
      )}
    </TasksProvider>
  );
};

export default Main;

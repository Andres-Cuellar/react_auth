import { useEffect } from "react";
import { checkAuth } from "../helpers/API";
import useAuth from "../hooks/useAuth";
import Form from "./Form";
import Logged from "./Logged";

const Main = () => {
  const { logged, setLogged } = useAuth();

  useEffect(() => {
    const checkAuthFunction = async () => {
      const tokenResult = await checkAuth();
      if (tokenResult) {
        setLogged(true);
      }
    };

    checkAuthFunction();
  }, []);

  return (
    <>
      {logged ? <Logged /> : null}
      {!logged ? <Form /> : null}
    </>
  );
};

export default Main;

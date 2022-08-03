import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAtuh = () => {
  return useContext(AuthContext);
};

export default useAtuh;

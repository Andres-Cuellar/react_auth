import { createContext, useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const hola = "hola mundo";

  const [user, setUser] = useState([]);
  return (
    <AuthContext.Provider value={{ setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;

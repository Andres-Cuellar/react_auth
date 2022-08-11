import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState(null);
  const [logged, setLogged] = useState(false);

  return (
    <AuthContext.Provider
      value={{ setUser, user, token, setToken, logged, setLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;

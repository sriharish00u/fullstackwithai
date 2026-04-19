import { createContext, useState, useEffect } from "react";
import { getToken, getUsername, clearAuth } from "../services/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    const username = getUsername();

    if (token && username) {
      setUser({ username });
    } else {
      setUser(null);
    }

    setLoading(false);
  }, []);

  const login = (token, username) => {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    setUser({ username });
  };

  const logout = () => {
    clearAuth();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
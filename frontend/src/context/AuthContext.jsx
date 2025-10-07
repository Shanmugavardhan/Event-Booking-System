import { createContext, useContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      setUser({ token, email_id: decoded.email_id, email: decoded.email, username: decoded.username});
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    const decoded = jwt_decode(token);
    setUser({ token, email_id: decoded.email_id, email: decoded.email, username: decoded.username});
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

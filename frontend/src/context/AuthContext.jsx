import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setUser({ token, username: decoded.username});
    }
  }, []);

  const login = (token) => {
    console.log("login in AuthContext is triggered");
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token);
    setUser({ token, username: decoded.username});
    console.log(username);
    console.log("Executed all statements in login");
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

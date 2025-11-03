import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setUser({ token, username: decoded.username });
    }
  }, []);

  const login = (token) => {
    console.log("login in AuthContext is triggered");
    localStorage.setItem("token", token);
    try {
      const decoded = jwtDecode(token);
      console.log("token successfully decoded", decoded);
      setUser({ token, username: decoded.username });
      console.log("setUser worked!", decoded.username);
    } catch (err) {
      console.error("Failed to decode token:", err);
      // fallback: still store token but set user minimally
      setUser({ token, username: null });
    }
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

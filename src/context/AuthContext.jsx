import { createContext, useContext, useState, useEffect } from "react";
import { users } from "../data/Users";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username, password) => {
    const foundUser = users.find(
      (u) => u.user === username && u.password === password
    );

    if (foundUser) {
      setCurrentUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));
      return foundUser; 
    }

    return null; 
  };
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, users }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
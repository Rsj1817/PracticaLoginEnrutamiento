import { createContext, useContext, useState } from "react";
import { users } from "../data/Users";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (username, password) => {
    const foundUser = users.find(
      (u) => u.user === username && u.password === password
    );

    if (foundUser) {
      setCurrentUser(foundUser);
      return foundUser;
    }

    return null;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, users }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

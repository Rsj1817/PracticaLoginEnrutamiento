import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";
import Button from "../Components/Button";
import Input from "../Components/Input";

const Login = () => {
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  if (currentUser) {
    return (
      <Navigate
        to={currentUser.role === "admin" ? "/admin" : "/profile"}
        replace
      />
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const authUser = login(user, password);

    if (authUser) {
      navigate(authUser.role === "admin" ? "/admin" : "/profile");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh" 
    }}>
      <form 
        onSubmit={handleSubmit}
        style={{
          padding: "30px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          width: "300px",
          textAlign: "center"
        }}
      >
        <h2>Login</h2>

        <Input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <div style={{ height: 15 }} />

        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div style={{ height: 20 }} />

        <Button type="submit">Ingresar</Button>
      </form>
    </div>
  );
};

export default Login;
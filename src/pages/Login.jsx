import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import Input from "../Components/Input";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

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
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <Input type="text" placeholder="Usuario" value={user} onChange={(e) => setUser(e.target.value)} />

      <div style={{ height: 12 }} />

      <Input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />

      <Button type="submit">Ingresar</Button>
    </form>
  );
};

export default Login;

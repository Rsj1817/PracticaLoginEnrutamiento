import { useAuth } from "../../context/AuthContext";
import Button from "../../Components/Button";

const UserList = () => {
  const { currentUser, logout } = useAuth();

  if (!currentUser) return null;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Perfil de Usuario</h2>

      <div style={{ marginTop: "10px" }}>
        <p><strong>Nombre:</strong> {currentUser.name}</p>
        <p><strong>Usuario:</strong> {currentUser.user}</p>
        <p><strong>Rol:</strong> {currentUser.role}</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Button onClick={logout}>
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
};

export default UserList;
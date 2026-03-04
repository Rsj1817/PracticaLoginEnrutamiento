import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Table from "../../Components/Table";

const Admin = () => {
  const { users } = useAuth();
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>Administración - Usuarios</h2>

      <div style={{ marginTop: 12 }}>
        <Table
          columns={[
            { header: "Usuario", key: "user" },
            { header: "Nombre", key: "name" },
            { header: "Rol", key: "role" }
          ]}
          data={users}
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => navigate("/profile")}>
          Ver mi perfil
        </button>
      </div>
    </div>
  );
};

export default Admin;
import { useAuth } from "../../context/AuthContext";
import Table from "../../Components/Table";
import UserList from "./UserList"; 

const Admin = () => {
  const { users } = useAuth();

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

      <div style={{ marginTop: 24 }}>
        <h3>Mi Perfil</h3>
        <UserList />
      </div>
    </div>
  );
};

export default Admin;

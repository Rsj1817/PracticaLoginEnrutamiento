import React from "react";
import { useAuth } from "../../context/AuthContext";
import TablaUsuarios from "../../Components/TablaUsuarios";
import UserList from "./UserList"; 

const Admin = () => {
  const { users } = useAuth();

  return (
    <div style={{ padding: 20 }}>
      <h2>Administración - Usuarios</h2>
      <div style={{ marginTop: 12 }}>
        <TablaUsuarios users={users} />
      </div>

      <div style={{ marginTop: 24 }}>
        <h3>Mi Perfil</h3>
        <UserList />
      </div>
    </div>
  );
};

export default Admin;
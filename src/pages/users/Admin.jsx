import { useAuth } from "../../context/AuthContext";

const Admin = () => {
  const { users } = useAuth();

  return (
    <div>
      <h2>Panel de Administración</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.user}>
              <td>{u.user}</td>
              <td>{u.name}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
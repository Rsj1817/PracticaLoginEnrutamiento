// src/Components/TablaUsuarios.jsx
import React from "react";

const TablaUsuarios = ({ users }) => {
  return (
    <div style={{ overflowX: "auto", marginTop: 15 }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#1e1e1e",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <thead style={{ background: "#2c2c2c", color: "#ffffff" }}>
          <tr>
            <th style={{ textAlign: "left", padding: 12 }}>Usuario</th>
            <th style={{ textAlign: "left", padding: 12 }}>Nombre</th>
            <th style={{ textAlign: "left", padding: 12 }}>Rol</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr
              key={u.user}
              style={{
                borderTop: "1px solid #3a3a3a",
              }}
            >
              <td style={{ padding: 12 }}>{u.user}</td>
              <td style={{ padding: 12 }}>{u.name}</td>
              <td
                style={{
                  padding: 12,
                  textTransform: "capitalize",
                }}
              >
                {u.role}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUsuarios;
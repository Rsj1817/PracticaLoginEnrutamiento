// src/Components/Input.jsx
import React from "react";

const Input = ({ label, value, onChange, type = "text", placeholder = "" , name }) => {
  return (
    <label style={{ display: "block", marginBottom: 12 }}>
      {label && <div style={{ marginBottom: 6, fontSize: 14 }}>{label}</div>}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "10px 12px",
          border: "1px solid #d1d5db",
          borderRadius: 6,
          outline: "none",
        }}
      />
    </label>
  );
};

export default Input;
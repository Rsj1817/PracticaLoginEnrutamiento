const Button = ({ children, onClick, type = "button", style = {} }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "10px 16px",
        backgroundColor: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold",
        ...style
      }}
    >
      {children}
    </button>
  );
};

export default Button;
import "./Button.scss";

const Button = ({ name, type, bgColor, color, onClick }) => {
  const styles = {
    backgroundColor: bgColor || "blue",
    color: color || "white",
    padding: "10px 32px",
    borderRadius: "2px",
    cursor: "pointer",
  };
  return (
    <div>
      <button
        type={type}
        style={styles}
        className="customBtn"
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;

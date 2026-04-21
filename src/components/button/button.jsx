import "./button.css";

export default function Button({
  children,
  onClick,
  theme = "primary",
  disabled = false,
}) {
  return (
    <button
      className={`trycatch-button -${theme}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

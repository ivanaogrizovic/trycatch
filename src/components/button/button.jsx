import "./button.css";

export default function Button({
  text,
  onClick,
  theme = "primary",
  disabled = "false",
}) {
  return (
    <button
      className={`trycatch-button -${theme}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
